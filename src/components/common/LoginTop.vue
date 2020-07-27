<!--
 * @Author: your name
 * @Date: 2020-07-27 20:12:43
 * @LastEditTime: 2020-07-27 22:12:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\components\common\LoginTop.vue
-->
<template>
  <div>
    <div class="LoginTop">
      <div></div>
      <div>{{ Text }}</div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["Text"]
};
</script>

<style lang="scss" scoped>
.LoginTop {
  height: 45px;
  background-color: white;
  display: flex;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.133vw; //快熟转化vw 得快捷键 alt =z
  }
}
</style>
