<script setup lang="ts">
const props = defineProps<{
  show?: boolean;
}>();
</script>

<template>
  <view class="bottom-bar bottom-button" :class="{ show: props.show }">
    <view class="left-view">
      <view class="title"> <text style="font-size: 24rpx">¥</text>5,850<text style="font-size: 24rpx">.00</text> </view>
      <view class="sub-title">根据量房数据和业主需求预算</view>
    </view>
    <view
      class="submit-button check_expose"
      data-track-widget_uid="more_btn"
      data-track-widget_case_title="查看详细费用"
      @click="$emit('clickBtn')"
    >
      查看详细费用
    </view>
  </view>
</template>

<style scoped lang="less">
.bottom-bar {
  margin-top: 34rpx;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  &.bottom-button {
    height: 200rpx;
    position: fixed;
    margin: 0;
    bottom: 0;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px -10px 20px 0px rgba(51, 51, 51, 0.05);
    border-radius: 32rpx 32rpx 0 0;
    transform: translate3d(0, 300rpx, 0);
    transition: transform 0.3s;

    &.show {
      transform: translate3d(0, 0, 0);
    }
  }

  .left-view {
    padding-top: 42rpx;
    padding-left: 32rpx;
    .title {
      font-family: DINPro-Bold;
      font-size: 44rpx;
      color: #f44531;
      letter-spacing: 0;
      font-weight: 700;
    }

    .sub-title {
      font-family: MiSans-Regular;
      font-size: 24rpx;
      color: #333333;
      letter-spacing: 0;
      font-weight: 400;
    }
  }

  .submit-button {
    // width: 486rpx;
    // flex: 1;
    margin-top: 32rpx;
    margin-right: 32rpx;
    padding: 0 46rpx;
    height: 100rpx;
    border-radius: 50rpx;
    font-size: 32rpx;
    color: #1a1a1a;
    text-align: center;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(-85deg, #ffd250 0%, #ffde3c 98%);
    image {
      margin-right: 10rpx;
      width: 32rpx;
      height: 32rpx;
    }
  }
}
</style>
