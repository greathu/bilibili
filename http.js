/*
 * @Author: your name
 * @Date: 2020-07-27 20:57:54
 * @LastEditTime: 2020-07-27 20:59:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\http.js
 */
import axios from "axios"

const http = axios.create({
  baseURL: "http://112.74.99.5:3000/web/api"
})

export default http
