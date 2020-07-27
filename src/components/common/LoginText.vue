<!--
 * @Author: your name
 * @Date: 2020-07-27 20:26:12
 * @LastEditTime: 2020-07-27 21:59:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bilibili\src\components\common\LoginText.vue
-->
<template>
  <div>
    <!-- 输入任意文本 -->
    <van-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
      v-model="content"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  props: ["label", "type", "placeholder"],
  watch: {
    content() {
      this.$emit("inputChange", this.content);
    }
  }
};
</script>
