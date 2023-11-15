<script setup lang="ts">
import cPopup from "@/components/c-popup.vue";
import StarRating from "./star-rating.vue";
import Rating from "./rating.vue";
import { ref } from "vue";

const isShowComment = ref(false);
</script>
<template>
  <div class="index">
    <button hover-class="button-hover" @click="isShowComment = true">click</button>
  </div>
  <StarRating readonly />

  <c-popup v-model:show="isShowComment" title="你是否满意本次服务">
    <Rating />
  </c-popup>
</template>

<style scoped lang="less"></style>
