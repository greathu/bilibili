<!--
 * @Author: your name
 * @Date: 2020-07-28 19:15:27
 * @LastEditTime: 2020-07-29 16:16:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\views\Article.vue
--> 
<template>
  <div v-if="model">
    <nav-bar></nav-bar>
    <div class="detailinfu">
      <div class="video">
        <video controls="controls" :src="model.content"></video>
      </div>
      <div class="detailinfoText">
        <div>
          <span>{{model.category.title}}</span>
          <span>{{model.name}}</span>
        </div>
        <div>
          <span>{{model.userinfo.name}}</span>
          <span>146.4万次观看</span>
          <span>5218</span>
          <span>{{model.date}}</span>
        </div>
        <div>
          <p @click="collectionClick" :class="{activeColor:collectionActive}">
            <span class="icon-star-full"></span>
            <span>收藏</span>
          </p>
          <p @click="subscriptClick" :class="{activeColor:subscritionActive}">
            <span class="icon-box-add"></span>
            <span>关注</span>
          </p>
          <p>
            <span class="icon-redo2"></span>
            <span>分享</span>
          </p>
        </div>
      </div>
      <div class="detailparent">
        <de-tail
          class="detailitem"
          v-for="(item,index) in commendList"
          :key="index"
          :detailitem="item"
        ></de-tail>
      </div>
      <comment-title :data-length="lens" ref="commentIpt" @Postcomment="PostSuccess"></comment-title>
      <comment @lengthselect="len => lens =len" ref="commentPulish" @publishClick="publishClick"></comment>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/common/Navbar.vue";
import commentTitle from "../components/article/commentTitle.vue";
import comment from "../components/article/comment.vue";
import Detail from "./Detail.vue";
export default {
  data() {
    return {
      model: null,
      commendList: null,
      myuser: {},
      lens: null,
      Postcom: {
        comment_content: "",
        comment_date: "",
        parent_id: null,
        article_id: null,
      },
      collectionActive: null,
      subscritionActive: null,
    };
  },
  methods: {
    //获取文章信息
    async articleitemData() {
      const res = await this.$http.get("/article/" + this.$route.params.id);
      this.model = res.data[0];
      if (this.model) {
        this.subscritionInit();
      }
    },
    //获取推荐文章
    async commendData() {
      const res = await this.$http.get("/commend");
      this.commendList = res.data;
    },
    //发表评论
    async PostSuccess(res) {
      const date = new Date();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      if (m < 10) {
        m = "0" + m;
      }
      if (d < 10) {
        d = "0" + d;
      }
      let str = `${m}-${d}`;
      this.Postcom.comment_content = res;
      this.Postcom.comment_date = str;
      this.Postcom.article_id = this.$route.params.id;
      /*  console.log(this.Postcom); */
      const result = await this.$http.post(
        "/comment_post/" + localStorage.getItem("id"),
        this.Postcom
      );
      this.$refs.commentPulish.commentData();
      this.Postcom.parent_id = null;
      if (result.status == 200) {
        this.$msg.fail("评论发表成功");
      }
    },
    publishClick(id) {
      this.Postcom.parent_id = id;
      this.$refs.commentIpt.focusIpt();
    },
    //收藏文章
    async collectionClick() {
      if (localStorage.getItem("token")) {
        const res = await this.$http.post(
          "/collection/" + localStorage.getItem("id"),
          { article_id: this.$route.params.id }
        );
        console.log(res.data.msg);
        if (res.data.msg == "收藏成功") {
          this.collectionActive = true;
        } else {
          this.collectionActive = false;
        }
      }
    },
    //进入页面获取是否收藏
    async collectionInit() {
      if (localStorage.getItem("token")) {
        const res = await this.$http.get(
          "/collection/" + localStorage.getItem("id"),
          {
            params: { article_id: this.$route.params.id },
          }
        );
        this.collectionActive = res.data.success;
      }
    },
    //关注用户
    async subscriptClick() {
      if (localStorage.getItem("token")) {
        const res = await this.$http.post(
          "/sub_scription/" + localStorage.getItem("id"),
          { sub_id: this.model.userid }
        );
        if (res.data.msg == "关注成功") {
          this.subscritionActive = true;
        } else {
          this.subscritionActive = false;
        }
        this.$msg.fail(res.data.msg);
      }
    },
    //进入页面获取是否收藏
    async subscritionInit() {
      if (localStorage.getItem("token")) {
        const res = await this.$http.get(
          "/sub_scription/" + localStorage.getItem("id"),
          {
            params: {
              sub_id: this.model.userid,
            },
          }
        );
        this.subscritionActive = res.data.success;
      }
    },
  },
  created() {
    this.articleitemData();
    this.commendData();
    this.collectionInit();
  },
  components: {
    "nav-bar": NavBar,
    "de-tail": Detail,
    commentTitle,
    comment,
  },
  watch: {
    $route() {
      this.articleitemData();
      this.commendData();
      this.collectionInit();
    },
  },
};
</script>
<style lang="scss" scoped>
.detailinfu {
  background-color: white;
  .video {
    width: 100%;
    video {
      width: 100%;
    }
  }
}
.detailinfoText {
  padding: 15px 15px;
  div:nth-child(1) {
    span:nth-child(1) {
      padding: 0 10px;
      color: #fb7299;
      background-color: #f4f4f4;
      border-radius: 10px;
    }
  }
  div:nth-child(2) {
    padding: 10px 10px;
    span {
      color: #aaa;
      font-size: 12px;
    }
    span:nth-child(1) {
      color: black;
      font-size: 12px;
      padding-right: 10px;
    }
  }
  div:nth-child(3) {
    padding: 0 2.778vw;
    display: flex;

    p {
      margin-right: 10px;
      display: flex;
      align-items: center;
      color: #757575;
      span:nth-child(1) {
        margin-right: 3px;
        font-size: 21px;
      }
      span:nth-child(2) {
        font-size: 13px;
      }
    }
    .activeColor {
      color: #fb7299;
    }
  }
}

.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detailitem {
    margin: 1.389vw 0;
    width: 45%;
  }
}
</style>