<template>
  <view>
    test
    {{ user.name }}
  </view>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/store/index";
import { useUserStore } from "@/store/user";
const counter = useCounterStore();
const user = useUserStore();
</script>

<style scoped lang="less"></style>
