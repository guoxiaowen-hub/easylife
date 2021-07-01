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
      <meishi-list :meishiList="meishiList"/>
    </scroll>
  </div>
</template>

<script>
  import HomeNavBar from "views/home/childComps/HomeNavBar";
  import HomeSwiper from "views/home/childComps/HomeSwiper";
  import HomeCateNavBar from "views/home/childComps/HomeCateNavBar";

  import BackTop from "components/content/backtop/BackTop";
  import Scroll from "components/common/scroll/Scroll";
  import MeishiList from "components/content/meishi/MeishiList";

  import {getHomeMultidata,getHomeMeishi} from "network/home";

  export default {
    name: "home",
    data() {
      return {
        banners: [],
        meishiList: [],
        page: 1,
        currentType: 'pop',
        isShowBackTop: false,
      }
    },
    components: {
      HomeNavBar,
      HomeSwiper,
      MeishiList,
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
    methods: {
      /**
      * 事件监听
      */
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        //判断backtop是否显示
        if((-position.y) > 400){
          this.isShowBackTop = true;
        }
        else {
          this.isShowBackTop = false;
        }

      },
      loadMore() {
        this.handleGoods()
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
      handleGoods() {
        getHomeMeishi(this.page).then(res => {
          this.page += 1;
          this.meishiList.push(...res.data);
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
    height: calc(100vh - 93px);
    overflow: hidden;
  }
</style>
