<!--
 * @Author: your name
 * @Date: 2020-07-28 11:31:32
 * @LastEditTime: 2020-07-28 13:31:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\views\Edit.vue
--> 
<template>
  <div v-if="model" class="editViews">
    <div style="margin-bottom:10px ">
      <nav-bar />
    </div>
    <div class="uploadfile">
      <van-uploader class="uploadimg" preview-size="100vw" :after-read="afterRead" />
      <edit-banner left="头像">
        <img :src="model.user_img" alt slot="right" v-if="model.user_img" />
        <img src="@/assets/default_img.jpg" alt slot="right" v-else />
      </edit-banner>
    </div>
    <edit-banner left="昵称" @bannerClick="show = true">
      <a href="javascripr:;" slot="right">{{model.name}}</a>
    </edit-banner>
    <edit-banner left="账号">
      <a href="javascripr:;" slot="right">{{model.username}}</a>
    </edit-banner>
    <edit-banner left="性别" @bannerClick="gendershow =true">
      <a href="javascripr:;" slot="right">{{model.gender == 1 ? '男': '女' }}</a>
    </edit-banner>
    <edit-banner left="出生日期" />
    <edit-banner left="个性签名" @bannerClick="textshow = true">
      <a href="javascripr:;" slot="right">{{model.user_desc}}</a>
    </edit-banner>

    <div class="editback" @click="$router.back()">返回个人中心</div>

    <van-dialog
      v-model="show"
      title="昵称"
      show-cancel-button
      @confirm="confirmClick"
      @cancel="content = ''"
    >
      <van-field v-model="content" type="textarea" autofocus />
    </van-dialog>

    <van-dialog
      v-model="textshow"
      title="个性签名"
      show-cancel-button
      @confirm="textareaClick"
      @cancel="content = ''"
    >
      <van-field v-model="content" type="textarea" autofocus />
    </van-dialog>

    <van-action-sheet v-model="gendershow" cancel-text="取消" :actions="actions" @select="onSelect" />
  </div>
</template>
<script>
import NavBar from "../components/common/Navbar.vue";
import editBanner from "../components/common/editBanner.vue";
export default {
  data() {
    return {
      model: {},
      show: false,
      textshow: false,
      gendershow: false,
      content: "",
      actions: [
        { name: "女", val: 0 },
        { name: "男", val: 1 },
      ],
    };
  },
  components: {
    "nav-bar": NavBar,
    "edit-banner": editBanner,
  },
  created() {
    this.SelectUser();
  },
  methods: {
    async SelectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
    async afterRead(file) {
      const fromdata = new FormData();
      fromdata.append("file", file.file);
      const res = await this.$http.post("/upload", fromdata);
      this.model.user_img = res.data.url;
      this.UserUpdate();
    },
    async UserUpdate() {
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.model
      );
      console.log(res);
    },
    confirmClick() {
      this.model.name = this.content;
      this.UserUpdate();
      this.content = "";
    },
    textareaClick() {
      this.model.user_desc = this.content;
      this.UserUpdate();
      this.content = "";
    },
    onSelect(data) {
      this.model.gender = data.val;
      this.UserUpdate();
      this.gendershow = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.editViews a {
  color: #333;
}
.editViews img {
  height: 46px;
  width: 46px;
  border-radius: 50%;
}
.uploadfile {
  position: relative;
  overflow: hidden;
  .uploadimg {
    opacity: 0;
    position: absolute;
  }
}
.editback {
  margin-top: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  color: #999;
  font-size: 4vw;
  padding: 15px 0;
}
</style>