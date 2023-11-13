<template>
  <div class="list">
    <view class="wrap">
      <view class="box" v-for="(item, index) in dataList" :key="index">
        <view class="top">
          <image class="img" src="https://pic1.ijiangmao.com/te/osf/48733ae10b914739b1001a1c61e77aa6.png" mode="scaleToFill" />
        </view>
        <view class="bottom">
          <view>
            <text class="bottom-title ellipsis-2">门洞加宽加高宽度在有限的以内高宽度在有限的以内</text>
          </view>
          <view class="bottom-desc">
            <text class="r1">¥</text>
            <text class="r2">9999</text>
            <text class="r3">.00</text>
            <text class="r4">/㎡</text>
            <text class="r5">￥11.18/㎡</text>
          </view>
        </view>
      </view>
    </view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const dataList = ref(["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]);
</script>

<style scoped lang="less">
.wrap {
  margin-top: 24rpx;
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18rpx;
}

.box {
  font-family: MiSans-Medium;
  font-size: 32rpx;
  color: #333333;
  letter-spacing: 0.18px;
  line-height: 44rpx;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20rpx;
}
.top {
  width: 100%;
  height: 350rpx;
}
.img {
  width: 100%;
  height: 100%;
}
.bottom {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32rpx;
  justify-content: space-between;
}
.bottom-title {
  font-family: MiSans-Medium;
  font-size: 28rpx;
  color: #1a1a1a;
  font-weight: 500;
}
.bottom-desc {
  margin-top: 16rpx;
}
.r1 {
  font-family: MiSans-Medium;
  font-size: 20rpx;
  color: #f44531;
  font-weight: 500;
}
.r2 {
  font-family: DINPro-Bold;
  font-size: 32rpx;
  color: #f44531;
  letter-spacing: -1px;
  font-weight: 700;
}
.r3 {
  font-family: DINPro-Bold;
  font-size: 24rpx;
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
  margin-left: 16rpx;
}
.ellipsis-2 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-wrap: break-word;
}
</style>
