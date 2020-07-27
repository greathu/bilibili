<!--
 * @Author: your name
 * @Date: 2020-07-27 22:20:36
 * @LastEditTime: 2020-07-27 22:52:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\components\common\Navbar.vue
-->
<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div>
      <p>
        请输入内容
        <van-icon class="ipt-icon" name="search" />
      </p>
    </div>
    <div>
      <img src="@/assets/default_img.jpg" alt="" />
      <p>下载App</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.navbar {
  height: 45px;
  background-color: white;
  display: flex;
  .logo {
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
    }
    p {
      padding: 5px 10px;
      margin: 0 8px;
      background-color: #fb7299;
      color: white;
      font-size: 13px;
      border-radius: 3px;
    }
  }
  div:nth-child(2) {
    flex: 1;
    align-content: center;
    display: flex;
    margin: 0 5px;
    p {
      font-size: 12px;
      line-height: 23px;
      background-color: #f4f4f4;
      height: 23px;
      width: 100%;
      border-radius: 13px;
      position: relative;
      padding-left: 25px;
      color: #aaa;
      .ipt-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translate(0, -40%);
        color: #aaa;
      }
    }
  }
}
</style>
