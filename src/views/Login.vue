<!--
 * @Author: your name
 * @Date: 2020-07-27 20:08:11
 * @LastEditTime: 2020-07-28 11:40:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\components\views\register.vue
-->
<template>
  <div>
    <login-top text="登录bilibili"></login-top>
    <login-text
      label="账号"
      placeholder="请输入账号"
      style="margin:4.167vw 0;"
      @inputChange="res => (model.username = res)"
    />
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      @inputChange="res => (model.password = res)"
    />
    <login-btn btntext="登录" @reginsterSubmit="reginsterSubmit"></login-btn>
  </div>
</template>
<script>
import LoginTop from "@/components/common/LoginTop.vue";
import LoginText from "@/components/common/LoginText.vue";
import LoginBtn from "@/components/common/LoginBtn.vue";
export default {
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    "login-top": LoginTop,
    "login-text": LoginText,
    "login-btn": LoginBtn,
  },
  methods: {
    async reginsterSubmit() {
      let rulg = /^.{6,16}$/;
      if (rulg.test(this.model.username) && rulg.test(this.model.password)) {
        const res = await this.$http.post("/login", this.model);
        this.$msg.fail(res.data.msg);
        if (res.data.code == 301 || res.data.code == 302) {
          return;
        }
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        setTimeout(() => {
          this.$router.push("/userinfo");
        }, 1000);
      } else {
        this.$msg.fail("格式不正确,请重新输入!");
      }
    },
  },
};
</script>

<style>
</style>