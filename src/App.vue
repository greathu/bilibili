<!--
 * @Author: your name
 * @Date: 2020-07-27 16:28:34
 * @LastEditTime: 2020-07-28 20:08:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\App.vue
-->
<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
}

p {
  padding: 0;
}
</style>
