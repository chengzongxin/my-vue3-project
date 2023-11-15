<script setup lang="ts">
import { reactive, ref } from "vue";
import StarRating from "./star-rating.vue";

const formData = reactive({
  desc: "",
});

const selectTagIdx = ref();

const tagList = ref(["师傅上门准时", "师傅上门准时", "师傅上门准时", "师傅上门准时"]);

const onClickStar = (e: number) => {
  console.log(e);
};

const onClickTag = (e: number) => {
  console.log(e);
  selectTagIdx.value = e;
};
</script>

<template>
  <view class="rating">
    <StarRating @click-star="onClickStar" />
    <view class="title">您对本次服务满意的地方是？</view>
    <view class="tag">
      <view
        class="tag-item"
        v-for="(item, index) in tagList"
        :key="index"
        :class="{ active: selectTagIdx === index }"
        @click="onClickTag(index)"
        >{{ item }}</view
      >
    </view>
    <input
      class="input"
      v-model="formData.desc"
      placeholder="请详细描述具体情况，有助于我们优化服务哦~"
      placeholder-class="input-placeholder"
      @input=""
    />
    <button class="btn">提交</button>
  </view>
</template>

<style scoped lang="less">
.rating {
  border-top: 1rpx solid rgba(227, 227, 227, 1);
  padding: 60rpx 32rpx;
  .title {
    margin-top: 60rpx;
    font-family: MiSans-Regular;
    font-size: 28rpx;
    color: #666666;
    letter-spacing: 0;
    text-align: center;
    font-weight: 400;
  }
  .tag {
    margin-top: 32rpx;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 33rpx;
    .tag-item {
      box-sizing: border-box;
      padding: 14rpx 0;
      font-family: MiSans-Medium;
      font-size: 28rpx;
      color: #1a1a1a;
      letter-spacing: 0.17px;
      text-align: center;
      line-height: 44rpx;
      font-weight: 500;
      border-radius: 16rpx;
      background: #f6f6f6;
      border: 3px solid rgba(255, 210, 80, 0);
    }

    .active {
      border: 3px solid rgba(255, 210, 80, 1);
      background: rgba(255, 210, 80, 0.1);
    }
  }
  .input {
    margin-top: 32rpx;
    height: 102rpx;
    background: #f6f6f6;
    border-radius: 16rpx;
    padding-left: 30rpx;
  }
  .input-placeholder {
    font-family: MiSans-Regular;
    font-size: 28rpx;
    color: #999999;
    font-weight: 400;
  }
  .btn {
    margin-top: 40rpx;
    font-family: MiSans-Demibold;
    font-size: 32rpx;
    color: #333333;
    text-align: center;
    font-weight: 600;
    background-image: linear-gradient(-86deg, #ffd250 0%, #ffde3c 98%);
    border-radius: 20rpx;
    height: 100rpx;
    line-height: 100rpx;
  }
}
</style>
