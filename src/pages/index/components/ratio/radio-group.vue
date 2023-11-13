<script setup lang="ts"></script>
<template>
  <view class="section-radio">
    <view class="section-radio-item">
      <view class="icon">
        <image src="" mode="scaleToFill" />
      </view>
      <text>是</text>
    </view>

    <view class="section-radio-item">
      <view class="icon">
        <image src="" mode="scaleToFill" />
      </view>
      <text>否</text>
    </view>
  </view>
</template>

<style scoped lang="less">
.section-radio {
  // display: flex;
  border: 2rpx solid rgba(226, 228, 226, 1);
  border-radius: 16rpx;
  .section-radio-item {
    height: 96rpx;
    display: flex;
    align-items: center;
    color: #fff;
    &:not(:last-child) {
      border-bottom: 2rpx solid rgba(236, 238, 236, 1);
    }
    .icon {
      border-radius: 18rpx;
      border: 2rpx solid rgba(226, 228, 226, 1);
      width: 36rpx;
      height: 36rpx;
      margin-left: 24rpx;
      image {
        width: 36rpx;
        height: 36rpx;
      }
    }
  }
}
</style>
