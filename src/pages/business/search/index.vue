<script setup lang="ts">
import cSearchInput from "@/components/c-search-input.vue";
import AssociateList from "./components/associate-list.vue";
import History from "./components/history.vue";
import ResultList from "./components/result-list.vue";
import { ref } from "vue";

const showType = ref(0);

function onClickCancle() {
  console.log("onClickCancle");
}

function onChangeInput(e: any) {
  console.log("onChangeInput", e.detail.value);
  if (e.detail.value) {
    showType.value = 2;
  } else {
    showType.value = 0;
  }
}
</script>

<template>
  <view class="content">
    <c-navigator :show-city="false" :show-back="true" background-color="#fff" title="订单列表" retainHeight />
    <view class="input-area">
      <c-search-input class="input-search" placeholder="搜索商品/商家" @input="onChangeInput" />
      <text class="input-cancel" @click="onClickCancle">取消</text>
    </view>
    <History v-if="showType === 0" />
    <AssociateList v-if="showType === 1" />
    <ResultList v-if="showType === 2" />
  </view>
</template>

<style scoped lang="less">
.content {
  padding: 16rpx;
  background-color: #fff;
  min-height: 100vh;
}
.input-area {
  display: flex;
  align-items: center;
}
.input-search {
  flex: 1;
}
.input-cancel {
  font-family: MiSans-Regular;
  font-size: 28rpx;
  color: #999999;
  letter-spacing: 0;
  text-align: center;
  line-height: 40rpx;
  font-weight: 400;
  padding-left: 36rpx;
  padding-right: 12rpx;
}
</style>
