<!--
 * @Author: your name
 * @Date: 2020-07-29 10:05:07
 * @LastEditTime: 2020-07-29 14:54:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\components\article\comment.vue
--> 
<template>
  <div class="comment">
    <p class="comment-title">
      <span>评论</span>
      <span>({{dataLength}})</span>
    </p>
    <div class="commentMyinfo">
      <img :src="myuser.user_img" v-if="myuser.user_img" />
      <img src="@/assets/default_img.jpg" v-else />
      <input v-model="comcontent" ref="Postipt" type="text" placeholder="请输入" />
      <button @click="commentPublish">发表</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["dataLength"],
  data() {
    return {
      myuser: null,
      comcontent: "",
    };
  },
  methods: {
    async myUserinfo() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.myuser = res.data[0];
    },
    commentPublish() {
      if (
        !this.myuser &&
        !localStorage.getItem("id") &&
        !localStorage.getItem("token")
      ) {
        this.$msg.fail("请先登录");
        return;
      }
      this.$emit("Postcomment", this.comcontent);
    },
    focusIpt() {
      this.$refs.Postipt.focus();
    },
  },
  created() {
    if (localStorage.getItem("token")) {
      this.myUserinfo();
    }
  },
};
</script>
<style lang="scss" scoped>
.comment {
  padding: 30px 10px 0 10px;
  .comment-title {
    span:nth-child(2) {
      color: #aaa;
      margin-left: 10px;
    }
  }
  .commentMyinfo {
    padding: 10px 0;
    display: flex;

    img {
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }
    input {
      outline: none;
      border: 0;
      background-color: #b8adad;
      border-radius: 13px;
      font-size: 12px;
      padding: 0 20px 0 15px;
      margin-left: 10px;
    }
    button {
      outline: none;
      border: 0;
      border-radius: 12px;
      background-color: #fb7299;
      color: white;
      width: 55px;
      margin-left: 10px;
      font-size: 12px;
      padding: 0 5px;
    }
  }
}
</style>