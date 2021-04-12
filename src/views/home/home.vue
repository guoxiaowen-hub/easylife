<template>
  <div id="home">
    <back-top class="top" @click.native="backClick"/>
    <!--上部导航栏-->
    <home-nav-bar/>
    <scroll class="scroll" ref="scroll">
      <!--轮播图-->
      <home-swiper :banners="banners"/>
      <!--分类轮播图-->
      <home-cate-nav-bar/>
      <!-- --商品展示区-- -->
      <!--控制导航栏-->
      <tab-control :titles="tabTitles" @tabClick="tabClick"/>
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
        currentType: 'pop'
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
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
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
</style>
