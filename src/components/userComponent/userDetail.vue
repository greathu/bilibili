<!--
 * @Author: your name
 * @Date: 2020-07-27 22:57:04
 * @LastEditTime: 2020-07-27 23:11:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\components\userComponent\userDetail.vue
-->
<template>
  <div class="userDetail">
    <div>
      <div class="user_img"><img src="@/assets/head_img.jpg" alt="" /></div>
      <div class="user_edit">
        <div>
          <p>
            <span>0</span>
            <span>粉丝</span>
          </p>
          <p>
            <span>54</span>
            <span>关注</span>
          </p>
          <p>
            <span>0</span>
            <span>获赞</span>
          </p>
        </div>
        <div>
          <div>编辑资料</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.userDetail {
  background-color: white;
  padding: 0 12px;
  > div {
    display: flex;
  }
  .user_img {
    margin-right: 20px;
    img {
      height: 85px;
      width: 85px;
      border-radius: 50%;
    }
  }
  .user_edit {
    flex: 1;
    div:nth-child(1) {
      display: flex;
      p {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 13px;
      }
      p:nth-child(1),
      p:nth-child(2) {
        border-right: 1px solid #cccccc;
      }
    }
  }
}
</style>
