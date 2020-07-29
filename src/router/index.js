/*
 * @Author: your name
 * @Date: 2020-07-27 16:28:34
 * @LastEditTime: 2020-07-29 16:25:19
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
import Home from "../views/Home.vue"
import userInfo from "../views/userinfo.vue"
import Edit from "../views/Edit.vue"
import Article from "../views/Article.vue"
import EditCategory from "../views/EditCategory.vue"

const routes = [{
    path: "/",
    component: Home,
    meta: {
      keepalive: true
    }
  },
  {
    path: "/reginster",
    component: register
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/userinfo",
    component: userInfo,
    meta: {
      istoken: true
    }
  },
  {
    path: "/edit",
    component: Edit,
    meta: {
      istoken: true
    }
  },
  {
    path: "/article/:id",
    component: Article
  },
  {
    path: "/editcategory",
    component: EditCategory
  }
]

const router = new Router({
  mode: "history",
  routes,
})
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.istoken == true) {
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  }
  next()
})

export default router
