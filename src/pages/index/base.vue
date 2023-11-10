<template>
  <view class="content">
    <view class="section">
      <view class="section-title">1. 房屋购房面积</view>
      <input class="section-input" disabled :value="'123456'" placeholder="" placeholder-class="input-placeholder" @input="" />
    </view>

    <view class="section">
      <view class="section-title">2. 房子是否有做设计</view>
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
    </view>
  </view>
</template>

<script lang="ts" setup>
const onRadioChange = (e: any) => {
  console.log(e);
};
</script>

<style scoped lang="less">
.content {
  padding: 0rpx 40rpx;
  .section {
    margin-top: 48rpx;
    .section-title {
      font-family: MiSans-Medium;
      font-size: 34rpx;
      color: #1a1a1a;
      line-height: 46rpx;
      font-weight: 500;
      margin-bottom: 28rpx;
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
  }
}
</style>
