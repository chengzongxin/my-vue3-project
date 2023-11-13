<template>
  <view class="content">
    <tab :titles="['基础信息', '全房个性化', '房屋空间']" v-slot="{ index }">
      <Base v-if="index === 0" />
      <Personal v-if="index === 1" />
      <House v-if="index === 2" />
    </tab>
  </view>
</template>

<script setup lang="ts">
import Tab from "./components/tab/index.vue";
import Base from "./base.vue";
import Personal from "./personal.vue";
import House from "./house.vue";
</script>

<style lang="less" scoped>
.content {
  background-color: white;
}
</style>
