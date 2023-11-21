<template>
  <view>
    home

    {{ user.name }}
    <button @click="onClick">click</button>
    <button @click="reset">reset</button>
    {{ user }}
  </view>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/store/index";
import { useUserStore } from "@/store/user";
const counter = useCounterStore();
const user = useUserStore();

function onClick() {
  // counter.increment();
  user.$patch({
    name: "czx",
    age: "30",
    sex: "man",
  });
}
function reset() {
  // counter.$reset();
  // user.username = "wx1123";
  user.$reset();
}
</script>

<style scoped lang="less"></style>
