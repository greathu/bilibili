/*
 * @Author: your name
 * @Date: 2020-07-27 16:28:34
 * @LastEditTime: 2020-07-27 22:03:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入vue-router  ->使用路由功能
import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "./router/index";


//引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import {
  Toast
} from "vant"
Vue.prototype.$msg = Toast
Vue.config.productionTip = false

import http from '../http'
Vue.prototype.$http = http
/* eslint-disable no-new */
new Vue({
  el: '#app',

  render: c => c(App),
  router
})
