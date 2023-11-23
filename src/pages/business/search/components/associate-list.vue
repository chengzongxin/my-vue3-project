<template>
  <div class="associate-list">
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
</script>

<style scoped lang="less">
.wrap {
  margin-top: 24rpx;
  display: flex;
  flex-direction: column;
}

.box {
  font-family: MiSans-Medium;
  font-size: 32rpx;
  color: #333333;
  letter-spacing: 0.18px;
  line-height: 44rpx;
  font-weight: 500;
  padding: 24rpx 40rpx;
  border-bottom: 1rpx solid #eceeec;
}
</style>
