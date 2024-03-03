import './assets/scss/all.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

// import Vue Loading
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

// import CKEditor
import CKEditor from '@ckeditor/ckeditor5-vue'

// import vue-sweetAlert2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

/* 引入 VeeValidate 元件跟功能 */
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
// 引入 VeeValidate 的驗證規則
import * as AllRules from '@vee-validate/rules'
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// 引入 bootstrap
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

// 引入 swiper
import { register } from 'swiper/element/bundle'

import App from './App.vue'
import router from './router'

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule])
})

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})

// 設定預設語系
setLocale('zh_TW')

/* app 設定 */
const app = createApp(App)

// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

// 掛載 VueLoading
app.use(LoadingPlugin)

app.use(VueSweetalert2)
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(register)
app.use(CKEditor)

app.mount('#app')
