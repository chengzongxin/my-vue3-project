<script setup lang="ts">
import { computed } from "vue";
import { onMounted, withDefaults } from "vue";

interface prop {
  imgList: Array<string>;
  originImgList?: Array<string>;
  limitCount: number;
  track?: object;
}
const props = withDefaults(defineProps<prop>(), {
  imgList: () => [],
  limitCount: 9,
});

const showImgs = computed(() => {
  return props.imgList.slice(0, props.limitCount);
});

const moreImgCount = computed(() => {
  const more = props.imgList.length - props.limitCount;
  return more > 0 ? `${more}+` : "";
});

const emit = defineEmits<{ (event: "clickIndex", index: number): void }>();

const onClick = (e: number) => {
  uni.previewImage({
    current: e,
    urls: props.originImgList ?? props.imgList,
  });
  emit("clickIndex", e);
};
</script>

<template>
  <view class="wrap" :class="{ wrap1: showImgs.length === 1, wrap2: showImgs.length === 2 }">
    <view class="box" v-for="(item, index) in showImgs" :key="index" @click.stop="onClick(index)">
      <image class="img" :src="item" :key="index" mode="aspectFill" />
      <view v-if="imgList.length > limitCount && index === showImgs.length - 1" class="more">{{ moreImgCount }}</view>
    </view>
  </view>
</template>

<style scoped lang="less">
.wrap {
  border-radius: 16rpx;
  overflow: hidden;
  /* grid布局 两端对齐,最后一行左对齐*/
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rpx;
  /* 如果上层是flex布局，会影响到这一层宽度不显示 */
  width: 100%;
}
.wrap1 {
  grid-template-columns: 436rpx;
  grid-template-rows: 436rpx;
  .box {
    .img {
      border-radius: 16rpx;
    }
  }
}
.wrap2 {
  .box {
    &:last-child {
      border-radius: 0rpx 16rpx 16rpx 0rpx;
    }
  }
}
.box {
  position: relative;
  flex-shrink: 0;
  aspect-ratio: 1;
  overflow: hidden;
  &:last-child {
    border-radius: 0rpx 0rpx 16rpx 0rpx;
  }
}

.img {
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.more {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0 10rpx;
  font-size: 20rpx;
  text-align: center;
  bottom: 16rpx;
  right: 16rpx;
  border-radius: 20rpx;
  height: 40rpx;
  line-height: 40rpx;
}
</style>
