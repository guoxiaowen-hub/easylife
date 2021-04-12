<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img class="swi-img" :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem}  from "components/common/swiper"

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .swi-img {
    width: 100vw;
    height: calc(100vw / 1.92);
  }
</style>
