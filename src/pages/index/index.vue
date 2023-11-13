<script setup lang="ts">
import cSearchInput from "@/components/c-search-input.vue";
import Tab from "@/components/tab/index.vue";
import List from "./list.vue";
</script>

<template>
  <div class="index">
    <!-- 搜索 -->
    <view class="input-area">
      <c-search-input class="input-search" placeholder="搜索商品/商家" />
    </view>
    <!-- 头部信息 -->
    <view class="head">
      <view class="user">
        <image class="avatar" src="https://pic1.ijiangmao.com/te/osf/48733ae10b914739b1001a1c61e77aa6.png" />
        <view class="row">
          <text class="name">{{ "南北建材批发中心" }}</text>
        </view>
        <view class="row">
          <view class="item">
            <text class="desc">{{ "广东省 深圳市 南山区 沙河街道" }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- tab -->
    <tab :titles="['推荐', '商品']" v-slot="{ index }" :sliderLeft="8">
      <view>
        <List />
      </view>
    </tab>
  </div>
</template>

<style scoped lang="less">
.index {
  position: relative;
  background-color: red;
  padding-left: 16rpx;
  padding-right: 16rpx;
  min-height: 100vh;
  background-image: url("https://pic1.ijiangmao.com/te/osf/00ee103593e74f7bbae1382f536c2340.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #f6f6f6;
}
.input-area {
  padding: 8rpx 32rpx;
}
.head {
  position: relative;
  background-color: #fff;
  border-radius: 32rpx 32rpx 0 0;
  margin-top: 48rpx;
}

.user {
  margin: 0rpx 16rpx;
  padding: 0rpx 32rpx;
  background-image: linear-gradient(180deg, #fffaed 0%, #ffffff 27%);
  border-radius: 16px;
  display: block;
  .avatar {
    width: 128rpx;
    height: 128rpx;
    border: 4rpx solid rgba(255, 255, 255, 1);
    border-radius: 50%;
    overflow: hidden;
    display: block;
    transform: translate(0rpx, -20rpx);
  }
  .row {
    display: flex;
    justify-content: left;
    align-items: center;
    .name {
      display: inline-block;
      font-size: 40rpx;
      color: #1a1a1a;
      letter-spacing: 0;
      text-align: center;
      font-family: MiSans-Semibold;
      font-weight: 600;
    }
    .type {
      display: inline-block;
      margin-left: 24rpx;

      background: rgba(255, 130, 34, 0.1);
      border-radius: 12rpx 12rpx 12rpx 0rpx;
      font-size: 24rpx;
      color: #ff8222;
      font: bold;
      padding: 5rpx 20rpx;
    }
    .item {
      display: flex;
      align-items: center;
      margin-right: 40rpx;
      .desc {
        font-family: MiSans-Regular;
        font-size: 24rpx;
        color: #999999;
        line-height: 32px;
        font-weight: 400;
      }
    }
  }
}
</style>
