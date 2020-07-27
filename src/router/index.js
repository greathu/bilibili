/*
 * @Author: your name
 * @Date: 2020-07-27 16:28:34
 * @LastEditTime: 2020-07-27 22:19:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//挂载页面
import register from "../views/register.vue"
import Login from "../views/Login.vue"
import userInfo from "../views/userinfo.vue"

const routes = [{
    path: "/reginster",
    component: register
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/userinfo",
    component: userInfo
  }
]

const router = new Router({
  mode: "history",
  routes,
})

export default router
