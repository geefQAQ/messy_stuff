import { createApp } from 'vue'
import * as VueRouter from 'vue-router';
import App from './App.vue'

import './assets/main.css'

import ElementPlus from 'element-plus';
import { ElMessageBox, ElMessage } from 'element-plus';
import 'element-plus/dist/index.css';
import routes from './router/index.js';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})
// TODO: 为什么解构不出来？
const app = createApp(App);
app.config.globalProperties.$confirm = ElMessageBox.confirm
app.config.globalProperties.$toast = ElMessage;

app.use(router);
app.use(ElementPlus);
app.mount('#app')