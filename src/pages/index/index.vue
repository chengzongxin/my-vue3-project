<template>
  <view>123</view>
</template>

<script setup lang="ts">
const richTextOperate = () => {
  console.log("richTextOperate");
};
</script>

<style scoped lang="less">
.rich-text {
  word-wrap: break-word;
  /* white-space: pre-wrap; */
  word-break: break-all;
  /* 设置富文本的大小 */
  font-size: 3.94vw;
}

.quotationDetail {
  color: aqua;
}

// .rich-text >>> a {
//   text-decoration: underline;
//   color: blue;
// }
</style>
