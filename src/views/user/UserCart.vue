<template>
    <!-- cartsList 購物車列表 -->
    <div class="container py-5">
        <h2 class="mb-5 text-center">購物車</h2>
        <div class="text-end">
          <button class="btn btn-outline-danger" type="button" @click="clearCartsList"
            :disabled="!cartsList.final_total">清空購物車</button>
        </div>
        <p v-if="!cartsList.final_total" class="text-center">目前購物車內沒有內容</p>
        <table class="table align-middle" v-else>
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 150px">數量/單位</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartsList.carts" :key="item.id">
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteCartItem(item.id)">
                  x
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">
                  已套用優惠券
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <input min="1" type="number" class="form-control" v-model.number="item.qty"
                      @blur="updateCart(item)">
                    <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                <small class="text-success" v-if="item.total !== item.final_total">折扣價：</small>
                {{ item.final_total }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ cartsList.total.toLocaleString() }}</td>
            </tr>
            <tr v-if="cartsList.total !== cartsList.final_total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ cartsList.final_total.toLocaleString() }}</td>
            </tr>
          </tfoot>
        </table>
      </div>

    <!-- 訂購人表格 -->
    <div class="py-4 bg-light">
    <div class="container">
      <div class="my-5 row justify-content-center">
        <h2 class="text-center">訂購資料</h2>
        <v-form ref="form" v-slot="{ errors }" class="col-md-6" @submit="submitOrder">
          <div class="mb-3">
            <label for="email" class="form-label has-required">Email</label>
            <v-field id="email" name="email" type="email" class="form-control"
              :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"
              v-model="form.user.email"></v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label has-required">收件人姓名</label>
            <v-field id="name" name="name" type="text" class="form-control" :class="{ 'is-invalid': errors['name'] }"
              placeholder="請輸入姓名" rules="required" v-model="form.user.name"></v-field>
            <error-message name="name" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label has-required">收件人電話</label>
            <v-field id="tel" name="tel" type="tel" class="form-control" :class="{ 'is-invalid': errors['tel'] }"
              placeholder="請輸入電話" rules="required|min:8|max:10" v-model="form.user.tel"></v-field>
            <error-message name="tel" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label has-required">收件人地址</label>
            <v-field id="address" name="address" type="text" class="form-control"
              :class="{ 'is-invalid': errors['address'] }" placeholder="請輸入地址" rules="required"
              v-model="form.user.address"></v-field>
            <error-message name="address" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="payment" class="form-label has-required">請選擇付款方式</label>
            <v-field
              id="payment"
              name="payment"
              class="form-control"
              :class="{ 'is-invalid': errors['payment'] }"
              placeholder="請選擇付款方式"
              rules="required"
              v-model="form.user.payment"
              as="select"
            >
              <option value="">請選擇付款方式</option>
              <option value="credit_card">信用卡付款</option>
              <option value="ATM">ATM 付款</option>
            </v-field>
            <error-message name="payment" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <v-field id="message" name="message" class="form-control" cols="30" rows="10" v-model="form.message"
              as="textarea"></v-field>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-danger">送出訂單</button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { mapActions, mapState } from 'pinia'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 訂單欄位
      form: {
        user: {
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    // 獲得購物車資料
    ...mapActions(cartStore, ['getCartsList', 'updateCart', 'deleteCartItem']),

    // 送出訂單
    submitOrder () {
      // 檢查購物車是否為空
      if (!this.cartsList.carts.length) {
        this.$swal.fire({
          title: '購物車內沒有商品',
          confirmButtonColor: '#333333',
          confirmButtonText: '確認'
        })

        return
      }

      // 開啟 loading
      const loader = this.$loading.show()

      // 資料處理
      const url = `${VITE_API}/api/${VITE_PATH}/order`
      const order = {
        data: this.form
      }

      this.axios.post(url, order)
        .then(res => {
          // 提示訊息
          this.$swal.fire({
            title: res.data.message,
            confirmButtonColor: '#333333',
            confirmButtonText: '確認'
          })

          // 清除表單
          this.$refs.form.resetForm()
          // 重整購物車
          this.getCartsList()
        })
        .catch(err => {
          this.$swal.fire(
            {
              icon: 'error',
              text: err.response.data.message
            }
          )
        })
        .finally(() => {
          // 關閉 loading
          loader.hide()
        })
    },

    // 刪除全部購物車
    clearCartsList () {
      // 刪除前提示詢問
      this.$swal.fire({
        title: '確定要清空購物車嗎？',
        text: '這個動作無法復原',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#000000',
        cancelButtonColor: 'gray',
        confirmButtonText: 'OK'
      }).then((result) => {
        // 確認刪除
        if (result.isConfirmed) {
          // 開啟 loading
          const loader = this.$loading.show()

          // 資料處理
          const url = `${VITE_API}/api/${VITE_PATH}/carts`

          this.axios.delete(url)
            .then(res => {
              // 提示訊息
              this.$swal.fire({
                title: res.data.message,
                confirmButtonColor: '#333333',
                confirmButtonText: '確認'
              })
              // 重整購物車
              this.getCartsList()
            })
            .catch(err => this.$swal.fire({
              icon: 'error',
              text: err.response.data.message
            }))
            .finally(() => {
              // 關閉 loading
              loader.hide()
            })
        }
      })
    }
  },
  mounted () {
    this.getCartsList()
  },
  computed: { ...mapState(cartStore, ['cartsList']) }
}
</script>
