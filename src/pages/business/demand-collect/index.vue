<template>
  <view class="content">
    <c-navigator
      :show-city="false"
      :show-back="true"
      background-color="#fff"
      ref="navRef"
      @rendered="handleNavRendered"
      title="需求收集"
      retainHeight
    />
    <tab :titles="['基础信息', '全房个性化', '房屋空间']" v-slot="{ index }">
      <Base v-if="index === 0" />
      <Personal v-if="index === 1" />
      <House v-if="index === 2" />
    </tab>
    <BottomBar :show="true" />
  </view>
</template>

<script setup lang="ts">
import Tab from "@/components/tab/index.vue";
import Base from "./base.vue";
import Personal from "./personal.vue";
import House from "./house.vue";
import BottomBar from "./bottom-bar.vue";
import { reactive } from "vue";
const size = reactive({
  contentHeight: 0,
  navHeight: 0,
});
function handleNavRendered(data: { contentHeight: number; navHeight: number }) {
  size.contentHeight = data.contentHeight;
  size.navHeight = data.navHeight;
}
</script>

<style lang="less" scoped>
.content {
  background-color: #f6f6f6;
}
</style>
