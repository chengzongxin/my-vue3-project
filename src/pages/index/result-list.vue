<template>
  <div class="result-list">
    <view class="wrap">
      <view class="box" v-for="(item, index) in dataList" :key="index">
        <view class="left">
          <image class="img" src="https://pic1.ijiangmao.com/te/osf/48733ae10b914739b1001a1c61e77aa6.png" mode="scaleToFill" />
        </view>
        <view class="right">
          <text class="right-title-tag">平台补贴</text>
          <text class="right-title">门洞加宽加高宽度在有限的以内高宽度在有限的以内</text>
          <view>
            <text class="r1">补贴后¥</text>
            <text class="r2">9999</text>
            <text class="r3">.00</text>
            <text class="r4">/根</text>
            <text class="r5">￥11.18/㎡</text>
          </view>
        </view>
      </view>
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
  display: flex;
}
.left {
  width: 160rpx;
  height: 160rpx;
}
.img {
  width: 100%;
  height: 100%;
}
.right {
  flex: 1;
  padding-left: 20rpx;
}
.right-title-tag {
  font-family: MiSans-Medium;
  font-size: 20rpx;
  color: #1a1a1a;
  text-align: center;
  font-weight: 500;
  background: #ffd250;
  border-radius: 8rpx;
  padding: 4rpx 8rpx;
  margin-right: 4rpx;
}
.right-title {
  font-family: MiSans-Medium;
  font-size: 28rpx;
  color: #1a1a1a;
  font-weight: 500;
}
.r1 {
  font-family: MiSans-Medium;
  font-size: 20rpx;
  color: #f44531;
  font-weight: 500;
}
.r2 {
  font-family: DINPro-Bold;
  font-size: 36rpx;
  color: #f44531;
  letter-spacing: -1px;
  font-weight: 700;
}
.r3 {
  font-family: DINPro-Bold;
  font-size: 20rpx;
  color: #f44531;
  letter-spacing: -0.56px;
  font-weight: 700;
}
.r4 {
  font-family: MiSans-Regular;
  font-size: 24rpx;
  color: #333333;
  text-align: center;
  font-weight: 400;
}
.r5 {
  font-family: MiSans-Regular;
  font-size: 24rpx;
  color: #c1c1c1;
  font-weight: 400;
  margin-left: 21rpx;
}
</style>
