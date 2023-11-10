<template>
  <view class="content">
    <view class="type-box">
      <scroll-view scroll-x :scroll-left="0" scroll-with-animation>
        <view class="tab">
          <view class="tab-item tab-item-1" :class="{ active: selectIndex == 0 }" @click="onClickItem(0)">基础信息</view>
          <view class="tab-item tab-item-2" :class="{ active: selectIndex == 1 }" @click="onClickItem(1)">全房个性化</view>
          <view class="tab-item tab-item-3" :class="{ active: selectIndex == 2 }" @click="onClickItem(2)">房屋空间</view>
        </view>
        <view class="slider" :style="{ left: postion[selectIndex] + 'px' }"></view>
      </scroll-view>
    </view>

    <swiper class="swiper" :current="selectIndex" @change="onSwiperChange">
      <swiper-item><view class="content-item">1</view></swiper-item>
      <swiper-item><view class="content-item">2</view></swiper-item>
      <swiper-item><view class="content-item">3</view></swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { getCurrentInstance, onMounted, ref } from "vue";

const postion = ref([0]);
const selectIndex = ref(0);

onMounted(() => {
  getTabItemSize();
});

const instance = getCurrentInstance();

const getSize = async (that: any, selector: string[]): Promise<UniApp.NodeInfo[]> => {
  const arr = selector.map(
    sel =>
      new Promise(resolve => {
        const query = uni.createSelectorQuery();
        query
          .in(that)
          .select(sel)
          .boundingClientRect((rect: any) => {
            resolve(rect);
          })
          .exec();
      }),
  );

  return Promise.all(arr) as Promise<UniApp.NodeInfo[]>;
};

const getTabItemSize = async () => {
  const res = await getSize(instance, [".tab-item-1", ".tab-item-2", ".tab-item-3"]);
  console.log(res);

  postion.value = res.map(v => {
    return v.left! + v.width! / 2 - 28 / 2 / 2;
  });
};

const onClickItem = (i: number) => {
  selectIndex.value = i;
};

const onSwiperChange = (e: any) => {
  selectIndex.value = e.detail.current;
};

onLoad(() => {
  // getTabItemSize();
});
</script>

<style lang="less" scoped>
.content {
  background-color: white;
}

.tab {
  display: flex;
  padding: 0 50rpx;
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
  bottom: 0;
  transition: all 0.5s;
}

.swiper {
  height: 1344rpx;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}
</style>
