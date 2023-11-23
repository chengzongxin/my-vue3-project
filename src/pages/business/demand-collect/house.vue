<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import { onMounted, withDefaults } from "vue";

const dataList = ref();

onMounted(() => {
  dataList.value = [
    {
      icon: "",
      text: "客厅",
      desc: "共配置7项",
    },
    {
      icon: "",
      text: "卧室",
      desc: "共配置7项",
    },
    {
      icon: "",
      text: "卫生间",
      desc: "共配置7项",
    },
    {
      icon: "",
      text: "厨房",
      desc: "共配置7项",
    },
    {
      icon: "",
      text: "阳台",
      desc: "共配置7项",
    },
    {
      icon: "",
      text: "客餐厅",
      desc: "共配置7项",
    },
  ];
});

const onClick = (e: number) => {};
</script>

<template>
  <view class="content">
    <view class="wrap">
      <view class="box" v-for="(item, index) in dataList" :key="index" @click.stop="onClick(index)">
        <image class="img" :src="item.icon" :key="index" mode="aspectFill" />
        <view class="text">{{ item.text }}</view>
        <view class="desc">{{ item.desc }}</view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="less">
.content {
  .wrap {
    overflow: hidden;
    /* grid布局 两端对齐,最后一行左对齐*/
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20rpx;
    /* 如果上层是flex布局，会影响到这一层宽度不显示 */
    // width: 100%;
    padding: 24rpx 32rpx;
    background-color: #f6f6f6;
    .box {
      position: relative;
      flex-shrink: 0;
      // aspect-ratio: 1;
      overflow: hidden;
      border-radius: 16rpx;
      padding: 24rpx;
      background-color: #fff;
      .img {
        overflow: hidden;
        object-fit: cover;
        width: 60rpx;
        height: 60rpx;
        background-color: yellow;
        border-radius: 30rpx;
      }
      .text {
        font-family: MiSans-Regular;
        font-size: 34rpx;
        color: #1a1a1a;
        font-weight: 400;
      }
      .desc {
        font-family: MiSans-Normal;
        font-size: 24rpx;
        color: #333333;
        line-height: 32px;
        font-weight: 400;
      }
    }
  }
}
</style>
