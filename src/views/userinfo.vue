<!--
 * @Author: your name
 * @Date: 2020-07-27 22:16:51
 * @LastEditTime: 2020-07-27 22:58:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\views\userinfo.vue
-->
<template>
  <div class="userinfo">
    <nav-bar />
    <img src="@/assets/bannerTop_new.png" alt="" class="backImg" />
    <user-detail />
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar.vue";
import userDetail from "@/components/userComponent/userDetail.vue";
export default {
  components: {
    "nav-bar": Navbar,
    "user-detail": userDetail
  }
};
</script>

<style lang="scss" scoped>
.userinfo {
  .backImg {
    height: 91px;
    width: 100%;
  }
}
</style>
