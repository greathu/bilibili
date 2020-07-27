/*
 * @Author: your name
 * @Date: 2020-07-27 16:28:34
 * @LastEditTime: 2020-07-27 16:39:50
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
import router from './router'

//引入store ,将store变成一个全局得创库
import store from '@/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: c => c(App)
})
