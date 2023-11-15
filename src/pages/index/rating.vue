<script setup lang="ts">
import { reactive, ref } from "vue";
import StarRating from "./star-rating.vue";

const emit = defineEmits<{
  (e: "submit", form: object): void;
}>();

const formData = reactive({
  star: 0,
  tags: [""],
  desc: "",
});

const selectTagIdxs = ref<number[]>([]);

const tagList = ref(["师傅上门准时", "师傅态度很好", "师傅很专业", "师傅很耐心"]);

const onClickStar = (e: number) => {
  console.log(e);
};

const onClickTag = (e: number) => {
  console.log(e);
  if (selectTagIdxs.value.includes(e)) {
    selectTagIdxs.value = selectTagIdxs.value.filter(v => {
      return v != e;
    });
  } else {
    selectTagIdxs.value.push(e);
  }
  formData.tags = tagList.value.filter((v, i) => {
    if (selectTagIdxs.value.includes(i)) {
      return v;
    }
  });
};

const onSubmit = () => {
  emit("submit", formData);
};
</script>

<template>
  <view class="rating">
    <StarRating @click-star="onClickStar" v-model:value="formData.star" />
    <view class="title">您对本次服务满意的地方是？</view>
    <view class="tag">
      <view
        class="tag-item"
        v-for="(item, index) in tagList"
        :key="index"
        :class="{ active: selectTagIdxs.includes(index) }"
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
    <button class="btn" @click="onSubmit">提交</button>
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
      font-size: 28rpx;
      letter-spacing: 0.17px;
      text-align: center;
      line-height: 44rpx;
      border-radius: 16rpx;
      background: #f6f6f6;
      border: 3rpx solid rgba(255, 210, 80, 0);
      font-family: MiSans-Regular;
      color: #333333;
      font-weight: 400;
    }

    .active {
      font-family: MiSans-Medium;
      color: #1a1a1a;
      font-weight: 500;
      border: 3rpx solid rgba(255, 210, 80, 1);
      background: rgba(255, 210, 80, 0.1);
    }
  }
  .input {
    margin-top: 32rpx;
    height: 102rpx;
    background: #f6f6f6;
    border-radius: 16rpx;
    padding-left: 30rpx;
    font-family: MiSans-Semibold;
    font-size: 28rpx;
    color: #1a1a1a;
    font-weight: 600;
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
