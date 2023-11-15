<template>
  <view class="c-popup" v-show="show">
    <div class="mask" @click="handleClickMask"></div>
    <div class="content">
      <view v-if="showCloseBtn" class="close-btn" @click="handleClose"></view>
      <view v-if="title" class="title">{{ title }}</view>
      <slot></slot>
      <view v-if="btnText" class="btn" @click="handleBtn">{{ btnText }}</view>
    </div>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  // 弹窗显隐
  show: {
    type: Boolean,
    default: false,
  },
  // 是否展示关闭按钮
  showCloseBtn: {
    type: Boolean,
    default: true,
  },
  // 点击遮罩层是否关闭弹窗
  clickMaskClose: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: '',
  },
  btnText: {
    type: String,
    default: '',
  }
});

const emit = defineEmits<{
  (event: "update:show", show: Boolean): void;
  (event: "handleBtn"): void;
}>();

function handleClose() {
  emit("update:show", false);
}

function handleClickMask() {
  if (!props.clickMaskClose) return;
  emit("update:show", false);
}

function handleBtn() {
  emit('handleBtn')
}
</script>


<style lang="less" scoped>
.c-popup {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0rpx;
  left: 0rpx;
  bottom: 0rpx;
  right: 0rpx;
  z-index: 100;

  .mask {
    position: absolute;
    top: 0rpx;
    left: 0rpx;
    bottom: 0rpx;
    right: 0rpx;
    background: #000000;
    opacity: 0.7;
    z-index: 3;
  }

  .content {
    position: absolute;
    z-index: 4;
    bottom: 0rpx;
    background: #ffffff;
    width: 100%;
    padding-bottom: 68rpx;
    border-radius: 32rpx 32rpx 0rpx 0rpx;
    overflow: hidden;
    animation: show-popup 0.3s ease;

    .close-btn {
      position: absolute;
      width: 48rpx;
      height: 48rpx;
      right: 24rpx;
      top: 24rpx;
      z-index: 4;
      background: url('https://pic1.ijiangmao.com/te/osf/4add143b3d2446e2a429059f366e1f80.png') no-repeat;
      background-size: 32rpx 32rpx;
      background-position: center center;
    }

    .title {
      font-family: MiSans-Demibold;
      font-size: 36rpx;
      line-height: 48rpx;
      color: #1a1a1a;
      text-align: center;
      font-weight: 600;
      margin: 40rpx 0;
    }

    .btn {
      height: 100rpx;
      background: #ffd250;
      border-radius: 20rpx;
      margin: 0 40rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: MiSans-Demibold;
      font-size: 32rpx;
      color: #1a1a1a;
      text-align: center;
      font-weight: 600;
    }
  }
}

@keyframes show-popup {
  100% {
    transform: translate(0rpx, 0rpx);
  }

  0% {
    transform: translate(0rpx, 100%);
  }
}
</style>
