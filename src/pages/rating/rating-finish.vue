<script setup lang="ts">
import { reactive, ref } from "vue";
import StarRating from "./star-rating.vue";

const props = defineProps<{
  star?: number;
  tagList?: any[];
  desc?: string;
}>();
</script>

<template>
  <view class="rating">
    <StarRating readonly v-model:value="props.star" />
    <view class="tag">
      <view class="tag-item" v-for="(item, index) in props.tagList" :key="index" :class="{ active: true }">{{ item }}</view>
    </view>
    <input
      class="input"
      disabled
      v-model="props.desc"
      placeholder="请详细描述具体情况，有助于我们优化服务哦~"
      placeholder-class="input-placeholder"
      @input=""
    />
  </view>
</template>

<style scoped lang="less">
.rating {
  border-top: 1rpx solid rgba(227, 227, 227, 1);
  padding: 60rpx 32rpx;
  .tag {
    margin-top: 32rpx;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 33rpx;
    .tag-item {
      box-sizing: border-box;
      padding: 14rpx 0;
      font-size: 28rpx;
      letter-spacing: 0.17px;
      text-align: center;
      line-height: 44rpx;
      border-radius: 16rpx;
      background: #f6f6f6;
      border: 3rpx solid rgba(255, 210, 80, 0);
      font-family: MiSans-Regular;
      color: #333333;
      font-weight: 400;
    }

    .active {
      font-family: MiSans-Medium;
      color: #1a1a1a;
      font-weight: 500;
      border: 3rpx solid rgba(255, 210, 80, 1);
      background: rgba(255, 210, 80, 0.1);
    }
  }
  .input {
    margin-top: 32rpx;
    height: 102rpx;
    background: #f6f6f6;
    border-radius: 16rpx;
    padding-left: 30rpx;
    font-family: MiSans-Semibold;
    font-size: 28rpx;
    color: #1a1a1a;
    font-weight: 600;
  }
  .input-placeholder {
    font-family: MiSans-Regular;
    font-size: 28rpx;
    color: #999999;
    font-weight: 400;
  }
}
</style>
