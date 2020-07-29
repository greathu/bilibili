<!--
 * @Author: your name
 * @Date: 2020-07-27 22:16:51
 * @LastEditTime: 2020-07-28 09:54:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\views\userinfo.vue
-->
<template>
  <div class="userinfo">
    <nav-bar />
    <img src="@/assets/bannerTop_new.png" alt class="backImg" />
    <user-detail :userinfo="model" />
    <user-article />
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar.vue";
import userDetail from "@/components/userComponent/userDetail.vue";
import userArticle from "@/components/userComponent/userArticle.vue";
export default {
  data() {
    return {
      model: {},
    };
  },
  components: {
    "nav-bar": Navbar,
    "user-detail": userDetail,
    "user-article": userArticle,
  },
  methods: {
    async UserinfoData() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"), {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      this.model = res.data[0];
    },
  },
  created() {
    this.UserinfoData();
  },
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
