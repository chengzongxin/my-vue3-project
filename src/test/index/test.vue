<template>
  <view class="content">
    <!-- <img src="https://pic1.ijiangmao.com/te/osf/094445a255b244ceac4514fa16cdaffe.png" /> -->
    <view class="text-area">
      <text class="title">{{ unifyNumber(10000.023) }}</text>
    </view>

    <!-- <GridImage :img-list="imgs" :limit-count="100" /> -->
    <FeedFlow :model="feedModel" />
  </view>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import GridImage from "../../feed-flow/grid-image.vue";
import FeedFlow from "../../feed-flow/feed-flow.vue";
import { reactive } from "vue";
import { FeedFlowType, type FeedFlowModel } from "../../feed-flow/feed-flow-model";
const title = ref("123");

const imgs = [
  "https://pic1.ijiangmao.com/te/osf/094445a255b244ceac4514fa16cdaffe.png",
  "https://pic1.ijiangmao.com/te/osf/890fc8d2c70e490f906a5db4ca22985c.png",
  "https://pic1.ijiangmao.com/te/osf/094445a255b244ceac4514fa16cdaffe.png",
  "https://pic1.ijiangmao.com/te/osf/890fc8d2c70e490f906a5db4ca22985c.png",
  "https://pic1.ijiangmao.com/te/osf/094445a255b244ceac4514fa16cdaffe.png",
  "https://pic1.ijiangmao.com/te/osf/890fc8d2c70e490f906a5db4ca22985c.png",
  "https://pic1.ijiangmao.com/te/osf/094445a255b244ceac4514fa16cdaffe.png",
  "https://pic1.ijiangmao.com/te/osf/890fc8d2c70e490f906a5db4ca22985c.png",
  "https://pic1.ijiangmao.com/te/osf/094445a255b244ceac4514fa16cdaffe.png",
  "https://pic1.ijiangmao.com/te/osf/890fc8d2c70e490f906a5db4ca22985c.png",
  "https://pic1.ijiangmao.com/te/osf/094445a255b244ceac4514fa16cdaffe.png",
  "https://pic1.ijiangmao.com/te/osf/890fc8d2c70e490f906a5db4ca22985c.png",
];

// const feedModel = reactive<FeedFlowModel>();
const feedModel = ref<FeedFlowModel>();

function unifyNumber(num: any) {
  if (num === "") {
    return 0;
  } else {
    let handleNum = parseFloat(num);
    let isToFixed = handleNum.toString().includes(".") && handleNum.toString().split(".")[1].length > 2;
    if (isToFixed) {
      return handleNum.toFixed(2);
    } else {
      return handleNum;
    }
  }
}

onLoad(() => {
  title.value = "onLoad";
  const obj: FeedFlowModel = {
    type: FeedFlowType.NORMAL,
    user: {
      avatar: "https://pic1.ijiangmao.com/te/osf/fbf388d7d6954b179eb5a9086e618874.png",
      name: "333",
      desc: "444445555",
      identify: "55555",
    },
    info: {
      time: "",
      stage: "",
    },
    importantConent: "rwhjkrh",
    content: "23123213",
    imageList: imgs.map((v: any) => {
      return { imageUrl: v, thumbnailImageUrl: v, id: v };
    }),
    imageLimitCount: 9,
    location: "123123",
  };

  feedModel.value = obj;
});
</script>

<style lang="less" scoped>
.content {
  // background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32rpx;
}
.imgwrap {
  position: relative;
  width: 100%;
}
</style>
