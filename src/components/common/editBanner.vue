<!--
 * @Author: your name
 * @Date: 2020-07-28 11:42:01
 * @LastEditTime: 2020-07-28 12:41:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\components\common\editBanner.vue
--> 
<template>
  <div @click="bannerClick">
    <div class="editbanner">
      <span>{{left}}</span>
      <span>
        <slot name="right"></slot>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["left"],
  methods: {
    bannerClick() {
      this.$emit("bannerClick");
    },
  },
};
</script>
<style lang="scss" scoped>
.editbanner {
  background-color: white;
  padding: 15px;
  color: #333;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>