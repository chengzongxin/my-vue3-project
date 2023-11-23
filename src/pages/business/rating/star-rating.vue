<script setup lang="ts">
import { onMounted } from "vue";
import { watch } from "vue";
import { reactive } from "vue";
import { ref } from "vue";

const props = defineProps<{
  readonly?: boolean;
  value?: number;
}>();

const emit = defineEmits<{
  (e: "update:value", i: number): void;
}>();

const normal_icon = "https://pic1.ijiangmao.com/te/osf/18ad0b3dfe6b4c57a4b41709b3e3e384.png";
const select_icon = "https://pic1.ijiangmao.com/te/osf/bbd9c3bff1c64428928a7a79a59e1cf7.png";

const list = reactive([
  {
    icon: normal_icon,
    text: "非常不满意",
  },
  {
    icon: normal_icon,
    text: "不满意",
  },
  {
    icon: normal_icon,
    text: "一般",
  },
  {
    icon: normal_icon,
    text: "满意",
  },
  {
    icon: normal_icon,
    text: "非常满意",
  },
]);

watch(
  () => props.value,
  v => {
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      element.icon = i < v! ? select_icon : normal_icon;
    }
  },
);

const onClick = (e: number) => {
  if (props.readonly) {
    return;
  }
  emit("update:value", e + 1);
};
</script>

<template>
  <view class="content">
    <view class="wrap">
      <view class="box" v-for="(item, index) in list" :key="index" @click="onClick(index)">
        <image class="img" :src="item.icon" mode="scaleToFill" />
        <text class="text">{{ item.text }}</text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="less">
.content {
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .img {
        width: 60rpx;
        height: 60rpx;
      }
      .text {
        margin-top: 12rpx;
        font-family: MiSans-Normal;
        font-size: 24rpx;
        color: #999999;
        text-align: center;
        font-weight: 400;
      }
    }
  }
}
</style>
