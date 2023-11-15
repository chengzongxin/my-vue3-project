<script setup lang="ts">
import cPopup from "@/components/c-popup.vue";
import StarRating from "./star-rating.vue";
import Rating from "./rating.vue";
import RatingFinish from "./rating-finish.vue";
import { ref } from "vue";

const isShowComment = ref(false);
const isShowCommentFinish = ref(false);
const tagList = ["师傅上门准时", "师傅上门准时"];
</script>
<template>
  <div class="index">
    <button hover-class="button-hover" @click="isShowComment = true">comment</button>
    <button hover-class="button-hover" @click="isShowCommentFinish = true">finish</button>
  </div>
  <StarRating readonly />

  <c-popup v-model:show="isShowComment" title="你是否满意本次服务">
    <Rating />
  </c-popup>

  <c-popup v-model:show="isShowCommentFinish" title="评价完成">
    <RatingFinish :star="3" :tag-list="tagList" desc="还不错。。。" />
  </c-popup>
</template>

<style scoped lang="less"></style>
