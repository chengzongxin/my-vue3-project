<script setup lang="ts">
import { computed, ref, watch } from "vue";
import GridImage from "./grid-image.vue";
import { FeedFlowType, type FeedFlowModel } from "./feed-flow-model";
import FlodText from "./fold-text.vue";
const AVATAR_DEFALUT_URL = "https://pic1.ijiangmao.com/te/osf/48733ae10b914739b1001a1c61e77aa6.png";

const props = defineProps<{
  model?: FeedFlowModel;
  track?: object;
}>();

const type = computed(() => {
  return props.model?.type;
});

const emit = defineEmits<{
  (e: "clickItem"): void;
  (e: "clickUser"): void;
  (e: "clickText"): void;
  (e: "clickTextUnfold"): void;
  (e: "clickImage", index: number): void;
  (e: "clickLocation", v: string): void;
}>();

const imageList = computed(() => {
  return props.model?.imageList.map(item => {
    return item.thumbnailImageUrl;
  });
});

const originImageList = computed(() => {
  return props.model?.imageList.map(item => {
    return item.imageUrl;
  });
});

const onClickImage = (e: number) => {
  emit("clickImage", e);
};
</script>

<template>
  <!-- 单个内容 -->
  <view class="feed-flow" @click="$emit('clickItem')">
    <!-- 用户信息 -->
    <view class="user" @click.stop="$emit('clickUser')">
      <image class="avatar" :src="model?.user.avatar || AVATAR_DEFALUT_URL"></image>
      <view class="info">
        <view class="base">
          <text class="name">{{ model?.user.name }}</text>
          <text class="type" v-if="model?.user.identify">{{ model?.user.identify }}</text>
        </view>
        <text class="desc">{{ model?.user.desc }}</text>
      </view>
    </view>
    <!-- 时间 & 装修阶段 -->
    <view v-if="type === FeedFlowType.COMMENT" class="right-info">
      <view class="time">{{ model?.info.time }}</view>
      <view class="stage">{{ model?.info.stage }}</view>
    </view>
    <view style="margin-top: 32rpx" />
    <FlodText
      :importantText="model?.importantConent"
      :text="model?.content"
      @click-fold-text="$emit('clickText')"
      @click-fold-unfold="$emit('clickTextUnfold')"
    />
    <view style="margin-top: 32rpx" />
    <!-- 九宫格 -->
    <GridImage
      :track="track"
      :img-list="imageList"
      :origin-img-list="originImageList"
      :limit-count="model?.imageLimitCount || 9"
      @click-index="onClickImage"
    />
    <!-- 位置信息 -->
    <view v-if="type === FeedFlowType.DYNAMIC && model?.location" class="location" @click.stop="$emit('clickLocation', model.location)">
      <image class="location-image" src="https://pic1.ijiangmao.com/te/osf/a333fd979bda4d629c39badd91954829.png" />
      <text class="location-text">{{ model?.location }}</text>
    </view>
  </view>
</template>

<style scoped lang="less">
.feed-flow {
  padding-top: 32rpx;
  padding-bottom: 40rpx;
  width: 100%;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(226, 226, 226, 1);
  }
}
.user {
  display: inline-flex;
  .avatar {
    width: 72rpx;
    height: 72rpx;
    border-radius: 50%;
  }
  .info {
    margin-left: 20rpx;
    display: flex;
    flex-direction: column;
    .name {
      font: bold;
      font-size: 28rpx;
      color: #1a1a1a;
    }
    .type {
      display: inline-block;
      margin-left: 16rpx;
      background: rgba(255, 130, 34, 0.1);
      border-radius: 12rpx 12rpx 12rpx 0rpx;
      font-size: 22rpx;
      color: #ff8222;
      font: bold;
      padding: 2rpx 14rpx;
    }
    .desc {
      font-size: 22rpx;
      color: #999999;
    }
  }
}
.right-info {
  float: right;
  .time {
    font: bold;
    font-size: 24rpx;
    color: #1a1a1a;
    text-align: right;
  }
  .stage {
    font-size: 22rpx;
    color: #999999;
    text-align: right;
  }
}
.text-content {
  display: block;
  // margin: 32rpx 0;
  margin-top: 32rpx;
  font-size: 28rpx;
  color: #666666;
  .text-content-important {
    font-size: 28rpx;
    color: #ff8222;
    line-height: 38rpx;
  }
}
.location {
  display: inline-flex;
  padding: 6rpx 10rpx;
  align-items: center;
  background: #f6f6f6;
  border-radius: 12rpx;
  margin-top: 20rpx;

  &-image {
    width: 32rpx;
    height: 32rpx;
  }
  &-text {
    font: bold;
    font-size: 22rpx;
    color: #1a1a1a;
    letter-spacing: 0;
    &:last-child {
      margin-left: 4rpx;
    }
  }
}
</style>
