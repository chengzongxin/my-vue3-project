<template>
  <view>
    home
    <Top />
  </view>
</template>

<script setup lang="ts">
import { provide } from "vue";
import Top from "./top.vue";
import { ref } from "vue";

const count = ref(100);

provide("count", count);
provide("changeCount", (newCount: number) => {
  count.value = newCount;
});

const obj = ref({
  data: 10000,
  fun: (d: any) => {
    obj.value.data += d;
  },
});

provide("obj", obj);
</script>

<style scoped lang="less"></style>
