<template>
  <div id="home">
    <back-top class="top" @click.native="backClick" v-show="isShowBackTop"/>
    <!--上部导航栏-->
    <home-nav-bar/>
    <tab-control :titles="tabTitles"
                 class="fixed"
                 @tabClick="tabClick"
                 ref="tabcontrol2"
                 v-show="isTabShow"/>
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
      <!--控制导航栏-->
      <tab-control :titles="tabTitles"
                   @tabClick="tabClick"
                   ref="tabcontrol1"/>
      <!--商品列表-->
      <goods-list :goods="goods[currentType].list"/>
    </scroll>
  </div>
</template>

<script>
  import HomeNavBar from "views/home/childComps/HomeNavBar";
  import HomeSwiper from "views/home/childComps/HomeSwiper";
  import HomeCateNavBar from "views/home/childComps/HomeCateNavBar";

  import tabControl from "components/content/tabControl/tabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import BackTop from "components/content/backtop/BackTop";
  import Scroll from "components/common/scroll/Scroll";

  import {getHomeMultidata,getHomeGoods} from "network/home";

  export default {
    name: "home",
    data() {
      return {
        banners: [],
        tabTitles: ['流行','新款','精选'],
        goods: {
          'pop' : {page: 0, list: []},
          'new' : {page: 0, list: []},
          'sell' : {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabShow: false
      }
    },
    components: {
      HomeNavBar,
      HomeSwiper,
      HomeCateNavBar,
      tabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
      //1.请求多个数据
      this.handleMultidata();

      //2.请求商品数据
      this.handleGoods('pop');
      this.handleGoods('new');
      this.handleGoods('sell');
    },
    mounted() {
    },
    methods: {
      /**
      * 事件监听
      */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break
        }
        this.$refs.tabcontrol1.currentIndex = index;
        this.$refs.tabcontrol2.currentIndex = index;
      },
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
        this.tabOffsetTop = this.$refs.tabcontrol1.$el.offsetTop;
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
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
      },
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
  }

  .scroll {
    height: calc(100vh - 93px);
    overflow: hidden;
  }

  .top {
    z-index: 999;
  }

  .fixed {
    position: fixed;
    top: 44px;
    left: 0px;
    right: 0px;
    z-index: 999;
  }
</style>
