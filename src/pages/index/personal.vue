<template>
  <view class="content">
    <view class="section">
      <view class="section-title">1. 强弱电箱是否移位-强电箱移位</view>
      <radio-group class="section-radio-group" @change="">
        <view class="radio-item-wrap"> <radio class="radio-item" color="#FFCC33" :checked="false" />否</view>
        <view class="radio-item-wrap"> <radio class="radio-item" color="#FFCC33" :checked="true" />是</view>
      </radio-group>
    </view>

    <view class="section">
      <view class="section-title">2. 全房是否做地暖</view>
      <radio-group class="section-radio-group" @change="">
        <view class="radio-item-wrap"> <radio class="radio-item" color="#FFCC33" :checked="true" />否</view>
        <view class="radio-item-wrap"> <radio class="radio-item" color="#FFCC33" :checked="false" />是</view>
      </radio-group>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
</script>

<style scoped lang="less">
.content {
  margin-top: 16rpx;
  padding: 48rpx 40rpx;
  background-color: white !important;
  min-height: 100vh;
  .section {
    &:not(:first-child) {
      margin-top: 48rpx;
    }
    margin-top: 48rpx;
    .section-title {
      position: relative;
      display: block;
      font-family: MiSans-Medium;
      font-size: 34rpx;
      color: #1a1a1a;
      line-height: 46rpx;
      font-weight: 500;
      margin-bottom: 28rpx;
      padding-left: 20rpx;
      &::before {
        content: "*";
        position: absolute;
        font-family: MiSans-Medium;
        font-size: 34rpx;
        color: #fd6343;
        line-height: 46rpx;
        font-weight: 500;
        left: 0;
        top: 0;
      }
    }
    .section-input {
      border: 2rpx solid rgba(236, 238, 236, 1);
      border-radius: 16rpx;
      height: 96rpx;
      padding-left: 32rpx;
      position: relative;
      &::after {
        position: absolute;
        content: "㎡";
        top: 50%;
        transform: translateY(-50%);
        right: 32rpx;
      }
    }
    .section-radio-group {
      display: flex;
      flex-direction: column;
      border-radius: 18rpx;
      border: 2rpx solid rgba(226, 228, 226, 1);
      pointer-events: none;
      .radio-item-wrap {
        &:not(:last-child) {
          border-bottom: 2rpx solid rgba(226, 228, 226, 1);
        }
        .radio-item {
          padding: 32rpx 26rpx;
        }
      }
    }
  }
}
</style>
