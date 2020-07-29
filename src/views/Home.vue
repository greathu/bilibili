<!--
 * @Author: your name
 * @Date: 2020-07-27 20:07:58
 * @LastEditTime: 2020-07-29 17:03:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\components\views\Home.vue
--> 
<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="categorytab">
      <div class="category-ico" @click="$router.push('/editcategory')">
        <van-icon name="setting-o" />
      </div>
      <van-tabs v-model="active" sticky>
        <van-tab v-for="(item ,index) in category" :key="index" :title="item.title">
          <van-list
            v-model="item.loading"
            :immediate-check="false"
            :finished="item.finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <div class="detailparent">
              <de-tail
                class="detailitem"
                :detailitem="categoryitem"
                v-for="(categoryitem,categoryindex) in item.list"
                :key="categoryindex"
              ></de-tail>
            </div>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/common/Navbar.vue";
import Detail from "./Detail.vue";
export default {
  data() {
    return {
      category: [],
      active: 0,
    };
  },
  components: {
    "nav-bar": NavBar,
    "de-tail": Detail,
  },
  created() {
    this.seletCategor();
  },
  activated() {
    if (localStorage.getItem("newCat")) {
      let newCat = JSON.parse(localStorage.getItem("newCat"));
      this.category = this.changeCategory(newCat);
      this.selectArticle();
    }
  },
  methods: {
    async seletCategor() {
      if (localStorage.getItem("newCat")) {
        let newCat = JSON.parse(localStorage.getItem("newCat"));
        this.category = this.changeCategory(newCat);
        this.selectArticle();
        return;
      }
      const res = await this.$http.get("/category");
      this.category = this.changeCategory(res.data);
      this.selectArticle();
    },

    changeCategory(data) {
      const category1 = data.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.finished = false;
        item.loading = true;
        item.pagesize = 10;
        return item;
      });
      return category1;
    },
    async selectArticle() {
      const categoryitem = this.categoryItem();
      const res = await this.$http.get("/detail/" + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize,
        },
      });
      /* console.log(res); */
      categoryitem.list.push(...res.data);
      categoryitem.loading = false;
      if (res.data.length < categoryitem.pagesize) {
        categoryitem.finished = true;
      }
    },

    onLoad() {
      const categoryitem = this.categoryItem();
      setTimeout(() => {
        categoryitem.page += 1;
        this.selectArticle();
      }, 1000);
    },
    categoryItem() {
      const categoryitem = this.category[this.active];
      return categoryitem;
    },
  },
  watch: {
    active() {
      const categoryitem = this.categoryItem();
      if (!categoryitem.list.length) {
        this.selectArticle();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  background-color: white;
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
.categorytab {
  position: relative;
  .category-ico {
    position: absolute;
    z-index: 5;
    right: 0;
    top: 1.944vw;
    padding: 1.389vw 2.778vw;
    background-color: white;
  }
}
</style>