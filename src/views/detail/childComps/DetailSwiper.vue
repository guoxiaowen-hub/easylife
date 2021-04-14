<template>
    <swiper class="detail-swiper">
      <swiper-item v-for="item in topImages">
        <img class="img" :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper"

  export default {
    name: "DetailSwiper",
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
  }

  .img {
    width: 100vw;
    height: calc(100vw / 0.66);
  }
</style>
