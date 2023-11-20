<template>
  <rich-text
    @itemclick="richTextOperate"
    nodes="您的预约单已取消，如还需服务请重新预约~ 师傅已为您结算费用清单 <a class='quotationDetail'>[费用清单12]</a>"
    class="rich-text"
  ></rich-text>
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
