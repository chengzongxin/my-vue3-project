<template>
  <view>
    <h3>bottom</h3>
    <button @click="onClick">change count</button>
    {{ count }} from super
    <div>-----------</div>
    {{ obj.data }} from super obj
  </view>
</template>

<script setup lang="ts">
import { inject } from "vue";

const count = inject("count") as any;
const changeCount = inject("changeCount") as (n: number) => void;
// changeCount(2000);

const obj = inject("obj") as any;

const onClick = () => {
  console.log(count, count.value);

  changeCount(count.value + 1);
  obj.value.fun(10);
};
</script>

<style scoped lang="less"></style>
