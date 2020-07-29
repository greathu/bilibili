<!--
 * @Author: your name
 * @Date: 2020-07-29 10:55:25
 * @LastEditTime: 2020-07-29 15:45:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\components\article\comment.vue
--> 
<template>
  <div class="commentParent">
    <div v-for="(item,index) in commentList" :key="index">
      <div class="commentItem">
        <div class="userImg">
          <img v-if="item.userinfo && item.userinfo.user_img" :src="item.userinfo.user_img" alt />
          <img v-else src="@/assets/default_img.jpg" alt />
        </div>
        <div class="commentContent">
          <p>
            <span v-if="item.userinfo">{{item.userinfo.name}}</span>
            <span v-else>此用户无姓名</span>
            <span>{{item.comment_date}}</span>
          </p>
          <div>
            {{item.comment_content}}
            <span class="publish" @click="publishClick(item.comment_id)">回复</span>
          </div>
        </div>
      </div>
      <div style="padding-left:30px;">
        <comment-item :commentchild="item.child" @PostPublish="publishClick"></comment-item>
      </div>
    </div>
  </div>
</template>
<script>
import commentItem from "./commentItem";
export default {
  components: {
    commentItem,
  },
  data() {
    return {
      commentList: null,
    };
  },
  methods: {
    async commentData() {
      const res = await this.$http.get("/comment/" + this.$route.params.id);
      /*  console.log(res.data.length); */
      if (res.data) {
        this.$emit("lengthselect", res.data.length);
      }
      this.commentList = this.changeCommentData(res.data);
    },
    changeCommentData(data) {
      function fn(temp) {
        let arr1 = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].parent_id == temp) {
            arr1.push(data[i]);
            data[i].child = fn(data[i].comment_id);
          }
        }
        return arr1;
      }
      return fn(null);
    },
    publishClick(id) {
      //获取一级评论的id
      this.$emit("publishClick", id);
      /*  console.log(id); */
    },
  },
  created() {
    this.commentData();
  },
};
</script>
<style lang="scss" scoped>
.commentParent {
  padding: 10px 10px;
  > div {
    border-bottom: 1px solid #e7e7e7;
  }
  .commentItem {
    display: flex;
    padding: 10px 0;
    .userImg {
      margin-right: 10px;
      img {
        width: 35px;
        height: 35px;
      }
    }
    .commentContent {
      flex: 1;
      P {
        display: flex;
        font-size: 13px;
        color: #555;
        justify-content: space-between;
        margin-bottom: 5px;
      }
      div {
        font-size: 13px;
      }
      .publish {
        position: absolute;
        right: 0;
        margin-right: 40px;
        color: red;
      }
    }
  }
}
</style>