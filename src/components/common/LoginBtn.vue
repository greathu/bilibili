<!--
 * @Author: your name
 * @Date: 2020-07-27 20:37:14
 * @LastEditTime: 2020-07-27 21:30:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\components\common\LoginBtn.vue
-->
<template>
  <div class="btnparent" @click="registerClick">
    <div class="loginbtn">{{ btntext }}</div>
  </div>
</template>
<script>
export default {
  props: ["btntext"],
  methods: {
    registerClick() {
      this.$emit("reginsterSubmit");
    }
  }
};
</script>
<style lang="scss" scoped>
.btnparent {
  padding: 15px 10px;
}
.loginbtn {
  height: 45px;
  background-color: #ff9db5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 6.25vw;
}
</style>
