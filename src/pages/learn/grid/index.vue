<template>
  <view>
    home

    <div class="container">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
      <div>Six</div>
      <div>Seven</div>
    </div>

    <div class="wrapper">
      <div class="box1">One</div>
      <div class="box2">Two</div>
      <div class="box3">Three</div>
    </div>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
  gap: 20px;
}

* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px;
  grid-gap: 10px;
}

.box1 {
  grid-row: 1/3;
  grid-column: 1/4;
}

.box2 {
  grid-row: 2/4;
  grid-column: 4;
}

.box3 {
  grid-row: 3;
  grid-column: 3;
}
</style>
