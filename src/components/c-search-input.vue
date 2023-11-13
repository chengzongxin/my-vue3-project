<!--
 * @Author: Dyven
 * @Description: 
 * @Date: 2023-11-10 17:03:34
 * @LastEditors: Dyven
 * @LastEditTime: 2023-11-13 10:29:06
-->
<template>
  <view class="c-search-input">
    <view class="c-search-box">
      <view class="icon"></view>
      <view class="input-box">
        <input class="c-input" type="text" :placeholder="placeholder" placeholder-style="color:#c9cbc9;" @input="$emit('input', $event)" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
withDefaults(
  defineProps<{
    placeholder?: string;
  }>(),
  {
    placeholder: "搜索商品",
  },
);
</script>

<style lang="less" scoped>
.c-search-input {
  .c-search-box {
    width: inherit;
    height: 72rpx;
    background-color: #f6f6f6;
    border-radius: 16rpx;
    display: flex;
    align-items: center;
    padding: 0 24rpx;
    box-sizing: border-box;
    .icon {
      width: 40rpx;
      height: 40rpx;
      background: url("https://pic1.ijiangmao.com/te/osf/51b8fc54a16746d29638f849c57ceaa1.png") center no-repeat;
      background-size: 100%;
    }
    .input-box {
      font-size: 28rpx;
      padding-left: 20rpx;
      box-sizing: border-box;
      width: 100%;
      height: inherit;
      .c-input {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
