<template>
  <view class="content">
    <view class="type-box">
      <scroll-view class="tab-scroll" scroll-x :scroll-left="0" scroll-with-animation>
        <view class="tab">
          <view class="tab-item" :class="{ active: selectIndex == index }" v-for="(item, index) in titles" @click="onClickItem(index)">{{
            item
          }}</view>
        </view>
        <view class="slider" :style="{ left: postion[selectIndex] + 'px' }"></view>
      </scroll-view>
    </view>

    <swiper class="swiper" :current="selectIndex" @change="onSwiperChange" :style="'height: ' + listHeight + 'px;'">
      <swiper-item v-for="(item, index) in titles" :key="index">
        <view class="content-item">
          <scroll-view class="scroll-Y" :style="'height: ' + listHeight + 'px;'" scroll-y>
            <slot :index="index"></slot>
          </scroll-view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { getCurrentInstance, onMounted, ref } from "vue";

const props = defineProps<{
  titles?: Array<string>;
  sliderLeft?: number;
}>();

const instance = getCurrentInstance();
const postion = ref([0]);
const selectIndex = ref(0);
const listHeight = ref(uni.getSystemInfoSync().windowHeight);

onMounted(() => {
  calcSize();
});

const calcSize = () => {
  uni
    .createSelectorQuery()
    .in(instance)
    .selectAll(".tab-item")
    .boundingClientRect((rect: any) => {
      const rects = rect as UniApp.NodeInfo[];
      postion.value = rects.map(v => {
        console.log(v);

        return v.left! + v.width! / 2 - 28 / 2 / 2 - (props.sliderLeft || 0);
      });
    })
    .exec();

  uni
    .createSelectorQuery()
    .in(instance)
    .selectAll(".type-box")
    .boundingClientRect((rect: any) => {
      const { height } = rect[0];
      const systemInfo: any = uni.getSystemInfoSync();
      listHeight.value = systemInfo.windowHeight - height;
      console.log(listHeight.value, height);
    })
    .exec();
};

const onClickItem = (i: number) => {
  selectIndex.value = i;
};

const onSwiperChange = (e: any) => {
  selectIndex.value = e.detail.current;
};

onLoad(() => {});
</script>

<style lang="less" scoped>
.content {
  // background-color: white;
}
.type-box {
  position: relative;
}
.tab-scroll {
  position: relative;
}
.scroll-Y {
  height: 300rpx;
}
.tab {
  display: flex;
  padding: 0 50rpx;
  background-color: #fff;
  height: 88rpx;
}
.tab-item {
  flex: 1;
  padding: 20rpx;
  font-family: MiSans-Normal;
  font-size: 32rpx;
  color: #7e807e;
  letter-spacing: 0;
  text-align: center;
  font-weight: 400;
  &.active {
    font-family: MiSans-Demibold;
    color: #1a1a1a;
    font-weight: 600;
  }
}

.slider {
  background: #1a1a1a;
  border-radius: 4rpx;
  width: 28rpx;
  height: 8rpx;
  position: absolute;
  // bottom: 0;
  top: 80rpx;
  transition: all 0.5s;
}
</style>
