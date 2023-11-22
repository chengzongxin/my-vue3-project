<template>
  <view>
    home
    {{ user.name }}
    <button @click="onClick">click</button>
    <button @click="reset">reset</button>
    {{ user }}
    <input placeholder="123" placeholder-class="input-placeholder" @input="" @focus="onFocus" />
    <button>click</button>
    data:{{ data?.a?.b?.c }}
  </view>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/store/index";
import { useUserStore } from "@/store/user";
import { onMounted, ref } from "vue";
const counter = useCounterStore();
const user = useUserStore();
const data = ref<A>();

type A = {
  a?: B;
};
type B = {
  b?: C;
};
type C = {
  c?: string;
};

onMounted(() => {
  const c = { c: "123456" };
  const b = { b: c };
  const a = { a: b };
  data.value = a;
  console.log(data.value?.a?.b?.c || "interput");
});

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

function onFocus(e: any) {
  console.log(e);
}
</script>

<style scoped lang="less"></style>
