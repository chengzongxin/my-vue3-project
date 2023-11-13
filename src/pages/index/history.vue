<template>
  <div class="history">
    <text class="title">历史搜索</text>
    <view class="wrap">
      <text class="box" v-for="(item, index) in dataList" :key="index">
        {{ item }}
      </text>
    </view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const dataList = ref(["排水管", "刷漆师傅"]);

onMounted(() => {});
</script>

<style scoped lang="less">
.history {
  padding: 48rpx 32rpx;
}
.title {
  font-family: MiSans-Semibold;
  font-size: 32rpx;
  color: #1a1a1a;
  letter-spacing: 0;
  font-weight: 600;
}

.wrap {
  margin-top: 24rpx;
}

.box {
  font-family: MiSans-Regular;
  font-size: 28rpx;
  color: #999999;
  letter-spacing: 0;
  font-weight: 400;
  padding: 16rpx 24rpx;
  background: #f6f6f6;
  border-radius: 16rpx;
  &:not(:last-child) {
    margin-right: 24rpx;
  }
}
</style>
