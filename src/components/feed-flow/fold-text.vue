<script setup lang="ts">
import { nextTick } from "process";
import { onMounted, reactive, ref, watch, type CSSProperties } from "vue";
import { getCurrentInstance } from "vue";

const isExpand = ref(false); //是否展开
const showExpand = ref(false); //是否显示展开收起按钮
const windowWidth = ref(0); //屏幕宽度
// const size = ref(12); //展开收起按钮大小-默认12

const instance = getCurrentInstance();

interface prop {
  importantText: string;
  text: string;
  lineCount: number;
  fontSize: number;
  color: string;
  btnFloatStyle: CSSProperties;
  lineHeight: number;
}

const props = withDefaults(defineProps<prop>(), {
  importantText: "",
  text: "",
  lineCount: 3,
  fontSize: 21,
  lineHeight: 21,
  color: "#FFB40F",
  btnFloatStyle: () => {
    return { float: "right" };
  },
});

const emit = defineEmits<{
  (e: "clickFoldText"): void;
  (e: "clickFoldUnfold"): void;
}>();

watch(
  () => props.text,
  val => {
    nextTick(async () => {
      const res = await uni.getSystemInfoSync();
      // 获取屏幕宽度
      windowWidth.value = res.windowWidth;
      judgeExpand(props.lineCount, props.fontSize);
    });
  },
);

onMounted(async () => {
  // 若text数据一开始有值，则监听触发不了，所以在此进行处理
  if (props.text) {
    const res = await uni.getSystemInfoSync();
    // 获取屏幕宽度
    windowWidth.value = res.windowWidth;
    judgeExpand(props.lineCount, props.fontSize);
  }
});
// 点击展开/收起按钮
const expandOrShrink = () => {
  isExpand.value = !isExpand.value;
  emit("clickFoldUnfold");
};

// 判断是否显示展开收起按钮
const judgeExpand = (lineCount: number, fontSize: number) => {
  // 行数 字体大小（rpx）
  let el = uni.createSelectorQuery().in(instance).select(".TEXT");
  // 设置为0的定时器，解决小程序bug
  setTimeout(() => {
    el.boundingClientRect(res => {
      const textHeight = (res as UniApp.NodeInfo).height!;
      // const lineHeight = (fontSize * 1.5 * windowWidth.value) / 750;
      // console.log("boundingClientRect", textHeight, lineHeight);

      // size.value = lineHeight > 42 ? 18 : 12;
      showExpand.value = textHeight > lineCount * props.lineHeight + lineCount / 2 + 1;
    }).exec();
  }, 0);
};
</script>

<template>
  <view class="TEXT" @click="$emit('clickFoldText')" :class="showExpand ? (isExpand ? '' : 'max-line-' + lineCount) : ''">
    <text class="text-content-important">{{ importantText }}</text>
    {{ text }}
    <!--  && isExpand === false 收起不展示 -->
    <view v-if="showExpand && isExpand === false" class="BTN" :class="isExpand ? 'expand-btn' : ''" @click.stop="expandOrShrink">
      <view class="btn-wrap clearfix" :style="btnFloatStyle">
        <view class="btn-text" :style="{ color: color }">
          {{ isExpand ? "收起" : "展开" }}
        </view>
        <view class="expand-icon"> </view>
      </view>
    </view>
  </view>
</template>

<style lang="less" scoped>
.TEXT {
  font-size: 28rpx;
  line-height: 1.5em;
  position: relative;
  word-break: break-all;
  max-height: 1000px;
  // transition: .3s max-height;
  .text-content-important {
    font-size: 28rpx;
    color: #ff8222;
    line-height: 38rpx;
  }
}

.BTN {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 1.5em;
  line-height: 1.5em;
  // background: #f2f3f5;
}
.BTN .btn-text {
  float: left;
  padding-right: 8rpx;
  padding-left: 10rpx;
  box-sizing: border-box;

  background-color: #fff;
}
.BTN .expand-icon {
  float: left;
  // padding-top: 8rpx;
}
.BTN::before {
  content: "";
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  left: -1.5em;
  bottom: 6rpx;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 80%);
}
.expand-btn {
  position: static;
}
//   文字展开收起

.max-line-1 {
  max-height: 1.5em;
  overflow: hidden;
}
.max-line-2 {
  max-height: 3em;
  overflow: hidden;
}
.max-line-3 {
  max-height: 4.5em;
  overflow: hidden;
}
.max-line-4 {
  overflow: hidden;
  max-height: 6em;
}
.max-line-5 {
  overflow: hidden;
  max-height: 7.5em;
}
.max-line-6 {
  overflow: hidden;
  max-height: 9em;
}
.max-line-7 {
  overflow: hidden;
  max-height: 10.5em;
}
.max-line-7 {
  overflow: hidden;
  max-height: 10.5em;
}
.max-line-8 {
  overflow: hidden;
  max-height: 12em;
}
.max-line-9 {
  overflow: hidden;
  max-height: 13.5em;
}
.max-line-10 {
  max-height: 15em;
  overflow: hidden;
}
</style>
