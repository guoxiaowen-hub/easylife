<template>
  <div id="home">
    <home-nav-bar />
    <back-top class="top"
              @click.native="backClick"
              v-show="isShowBackTop"/>
    <scroll class="scroll"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pulling-up="loadMore">
      <!--轮播图-->
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
      <!--分类轮播图-->
      <home-cate-nav-bar/>
      <!-- --商品展示区-- -->
      <deal-list :dealList="dealList"/>
    </scroll>
  </div>
</template>

<script>
  import HomeNavBar from "views/home/childComps/HomeNavBar";
  import HomeSwiper from "views/home/childComps/HomeSwiper";
  import HomeCateNavBar from "views/home/childComps/HomeCateNavBar";

  import BackTop from "components/content/backtop/BackTop";
  import Scroll from "components/common/scroll/Scroll";
  import DealList from "components/content/deal/DealList";

  import {getHomeMultidata,getHomeGoods} from "network/home";
  import {getHomeDeals} from "@/network/home";

  export default {
    name: "home",
    data() {
      return {
        banners: [],
        dealList: [],
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabShow: false
      }
    },
    components: {
      HomeNavBar,
      HomeSwiper,
      DealList,
      HomeCateNavBar,
      Scroll,
      BackTop
    },
    created() {
      //1.请求多个数据
      this.handleMultidata();

      //2.请求商品数据
      this.handleGoods();

    },
    mounted() {
    },
    methods: {
      /**
      * 事件监听
      */
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        //判断backtop是否显示
        if((-position.y) > 800){
          this.isShowBackTop = true;
        }
        else {
          this.isShowBackTop = false;
        }

        if((-position.y) <= this.tabOffsetTop - 44){
          this.isTabShow = false;
        }
        else {
          this.isTabShow = true;
        }
      },
      loadMore() {
        this.handleGoods(this.currentType);
      },
      swiperImgLoad() {
      },

      /**
      *网络请求相关
      */
      handleMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list;
        })
      },
      handleGoods(type) {
        getHomeDeals(1).then(res => {
          this.dealList.push(...res.data);
          console.log(this.dealList);
        })
      },
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
  }


  .top {
    z-index: 999;
  }

  .scroll {
    height: calc(100vh - 44px);
    overflow: hidden;
  }

  .fixed {
    height: 30px;
    position: fixed;
    top: 44px;
    left: 0px;
    right: 0px;
    z-index: 999;
  }
</style>
