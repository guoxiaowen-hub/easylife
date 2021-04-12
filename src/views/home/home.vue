<template>
  <div id="home">
    <!--上部导航栏-->
    <home-nav-bar/>
    <!--轮播图-->
    <home-swiper :banners="banners"/>
    <!--分类轮播图-->
    <home-cate-nav-bar/>
  </div>
</template>

<script>
  import HomeNavBar from "views/home/childComps/HomeNavBar";
  import HomeSwiper from "views/home/childComps/HomeSwiper";
  import HomeCateNavBar from "@/views/home/childComps/HomeCateNavBar";
  import {getHomeMultidata} from "network/home";

  export default {
    name: "home",
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    components: {
      HomeNavBar,
      HomeSwiper,
      HomeCateNavBar
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(this.recommends);
      })
    }
  }
</script>

<style scoped>
</style>
