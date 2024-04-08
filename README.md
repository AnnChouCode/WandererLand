# Wanderer Land
https://annchoucode.github.io/WandererLand/

Node.js 版本建議為：18.17.1 以上

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Bootstrap](https://camo.githubusercontent.com/c402bd25609922ab7160b91524aeb125a2e664070816aeb6dd66af9c41f70087/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f426f6f7473747261702d3536334437433f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465)
![HTML](https://camo.githubusercontent.com/bfe6a48836e87b13a16f1f56f88fee428475c2ac29247992ec9b8bcc7154f881/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465)
![CSS](https://camo.githubusercontent.com/472c222e8f240a48ae51cd9b082a1b857be809dcd851a25150890c2da50c13a5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465)
![Sass](https://camo.githubusercontent.com/8c5a9aede3fb0c0e98333e405a1207ef7b2e25ee97aa2a1113534e84bafc7463/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536173732d4343363639393f7374796c653d666f722d7468652d6261646765266c6f676f3d73617373266c6f676f436f6c6f723d7768697465)
![Vite](https://camo.githubusercontent.com/285fdadfaf59ede5da219ccf9f8278322e8f85cfa48f5ba33df53ce2f0c72098/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f566974652d4237334246453f7374796c653d666f722d7468652d6261646765266c6f676f3d76697465266c6f676f436f6c6f723d464644363245)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

![image](https://github.com/AnnChouCode/image-stock/blob/main/WandererLand/cover.jpg?raw=true)

## 專案說明
以販售藝術微噴為主題的電商網站，分為前台客戶使用，以及後台管理者使用。
- 製作者：Ann Chou
- 設計師：Ann Chou
- 文案來源：chatGPT
- 圖片來源：[unsplash](https://unsplash.com/)

  
### 使用技術
- 使用 `Vue 3` 和 `create-vue` 構建開發環境
- 選用 `Bootstrap 5` 搭配 `Sass` 進行網頁切版
- 整合 `ESLint Standard` 以保持程式碼風格的一致性
- 運用 `Pinia.js` 作為狀態管理工具，實現跨元件資料的傳遞

### 套件

以下是已經安裝在專案中的套件。

- axios (^1.6.5)
- bootstrap (^5.3.2)
- bootstrap-icons (^1.11.3)
- dotenv (^16.3.1)
- pinia (^2.1.7)
- vue (^3.3.11)
- vue-router (^4.2.5)
- @vitejs/plugin-vue (^4.5.2)
- eslint (^8.49.0)
- eslint-config-standard (^^17.1.0)
- eslint-import-resolver-alias (^1.1.2)
- eslint-plugin-import (^2.29.1)
- eslint-plugin-n (^16.6.2)
- eslint-plugin-promise (^6.1.1)
- eslint-plugin-vue (^9.20.1)
- gh-pages (^6.1.1)
- sass (^1.69.7)
- vite (^5.0.10)
- vite-plugin-eslint (^1.8.1)
- swiper (^10.3.1)
- vee-validate (^4.12.5)
- vue-loading-overlay (6.0)
- vue-sweetalert2 (^5.0.5)
- ckeditor5-vue (^5.1.0)
- chart.js (^4.4.2),
- vue-chartjs (^5.3.0")

---------------------------------------

## 前台簡介

### 首頁
- 最新消息、作品、藝術家一覽
- 複製優惠券代碼
- 聯絡平台
![image](https://github.com/AnnChouCode/image-stock/blob/main/WandererLand/hompage.jpg?raw=true)

### 作品、藝術家列表
- 可進行排序與篩選顯示
![image](https://github.com/AnnChouCode/image-stock/blob/main/WandererLand/productList.jpg?raw=true)

### 作品介紹
- 將作品加入購物車
- 關聯相同作者作品
![image](https://github.com/AnnChouCode/image-stock/blob/main/WandererLand/productinfo.jpg?raw=true)

### 最新消息
- 可依分類與標籤篩選作品
![image](https://github.com/AnnChouCode/image-stock/blob/main/WandererLand/articles.jpg?raw=true)

### 猜你喜歡 與 收藏作品
- 依據顧客瀏覽紀錄推薦作品
- 顧客可藉由商品 ♥️ 收藏喜歡作品
![image](https://github.com/AnnChouCode/image-stock/blob/main/WandererLand/recentlyview.jpg?raw=true)
  
## 後台簡介

### 營業總覽
- 用戶營業狀態一覽
- 視覺化銷售額圖表
![image](https://github.com/AnnChouCode/image-stock/blob/main/WandererLand/dashboard.jpg?raw=true)

### 作品 與 藝術家管理
- web 與 mobile 均可操作
- 可上傳本機端或網址圖片
![image](https://github.com/AnnChouCode/image-stock/blob/main/WandererLand/adminproduct.jpg?raw=true)

### 訂單管理
- 可手動更改付款與出貨狀態
- 檢視訂單動作流程
![image](https://github.com/AnnChouCode/image-stock/blob/main/WandererLand/adminorder.jpg?raw=true)

### 文章管理
- 可設定首頁置頂文章
- 快速選擇文章標籤
- 設定文章相關聯作品
![image](https://github.com/AnnChouCode/image-stock/blob/main/WandererLand/adminarticle.jpg?raw=true)

---------------------------------------

## 安裝與使用

以下將會引導你如何安裝此專案到你的電腦上。

### 取得專案

```bash
git clone https://github.com/AnnChouCode/WandererLand.git
```

## 環境變數

請將 `.env.example` 複製一份並命名為 `.env`，並將裡面的環境變數設定為你的值。

```bash
cp .env.example .env
```

### 安裝套件

```bash
npm install
```

### 啟動開發環境

```bash
npm run dev
```

### 打包專案

```bash
npm run build
```

### 部署專案

```bash
npm run deploy
```

---------------------------------------

## 資料夾結構

- `.vscode`：Visual Studio Code 的設定檔
- `dist`：打包後的檔案
- `public`：公開的靜態檔案
- `src`：專案的程式碼
  - `assets`：靜態檔案
  - `components`：元件
  - `router`：路由
  - `store`：狀態管理
  - `views`：頁面
  - `App.vue`：根元件
  - `main.js`：進入點
- `.env.example`：環境變數範本
- `.eslintrc.js`：ESLint 設定檔
- `.gitignore`：Git 忽略檔案
- `.nvmrc`：Node.js 版本
- `index.html`：進入點 HTML
- `package-lock.json`：套件版本鎖定
- `package.json`：專案資訊
- `README.md`：專案說明
- `vite.config.js`：Vite 設定檔

---------------------------------------

## gh-pages 部署說明

內建預設是使用 gh-pages 進行部署，因此只需要在專案根目錄下執行以下指令即可。

```bash
npm run deploy
```

（請記得將 `.env` 中的 `REPOSITORY_NAME` 改為你的專案名稱即可。）
