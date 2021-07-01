<template>
  <div id="detail">
    <detail-nav-bar @navClick="navClick" ref="navbar"/>
    <scroll :pull-up-load="true"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            class="scroll">
      <detail-swiper class="top-swiper" :topImages="topImages"/>
      <detail-base-info :goods="GoodsInfo"/>
      <detail-shop-info :shop="ShopInfo"/>
      <detail-comment :comments="comments" ref="comment"/>
      <detail-goods-info ref="detail" :goodsInfo="detailInfo"/>
    </scroll>
    <detail-bottom-bar class="bottom-bar"></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from "views/detail/childComps/DetailNavbar";
  import DetailSwiper from "views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "views/detail/childComps/DetailShopInfo";
  import DetailComment from "views/detail/childComps/DetailComment";
  import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";
  import DetailBottomBar from "views/detail/childComps/DetailBottomBar";

  import Scroll from "components/common/scroll/Scroll";

  import {getDetail, getDetailComment, GoodsInfo, ShopInfo} from "network/detail";

  export default {
    name: "detail",
    data() {
      return {
        iid: null,
        topImages: [],
        GoodsInfo: {},
        ShopInfo: {},
        detailInfo: {},
        comments: {},
        CommentOffsetTop: 0,
        DetailOffsetTop: 0,
        currentIndex: 0,
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailComment,
      DetailGoodsInfo,
      Scroll,
      DetailBottomBar
    },
    created() {
      this.iid = this.$route.params.id;
      this.handleDetail(this.iid);
      this.handelDetailComment(this.iid);
    },
    mounted() {
      //目前的误差90左右
      this.CommentOffsetTop = this.$refs.comment.$el.offsetTop;
      this.DetailOffsetTop = this.CommentOffsetTop + this.$refs.comment.$el.offsetHeight;
    },
    methods: {
      /**
       * 监听事件
       */
      contentScroll(position) {
        if( position.y <= -this.DetailOffsetTop-40) {
          this.currentIndex = 2;
        }
        else if( position.y <= -this.CommentOffsetTop) {
          this.currentIndex = 1;
        }
        else {
          this.currentIndex = 0;
        }
      },
      navClick(index) {
        switch (index) {
          case 0 :
            this.currentIndex = 0
            this.$refs.scroll.scrollTo(0,0)
            break;
          case 1 :
            this.currentIndex = 1
            this.$refs.scroll.scrollTo(0,-this.CommentOffsetTop)
            break;
          case 2 :
            this.currentIndex = 2
            this.$refs.scroll.scrollTo(0,-this.DetailOffsetTop-40)
            break;
        }
      },

      /**
       * 网络请求
       */
      handleDetail(iid) {
        getDetail(iid).then(res => {
          //轮播图获取
          this.topImages = res.data.result.itemInfo.topImages;

          //商品信息获取
          this.GoodsInfo = new GoodsInfo(res.data.result.itemInfo, res.data.result.columns, res.data.result.shopInfo.services)

          //商家信息获取
          this.ShopInfo = new ShopInfo(res.data.result.shopInfo);

          //详情数据
          this.detailInfo = res.data.result.detailInfo;
        })
      },
      handelDetailComment(goodsId) {
        getDetailComment(goodsId).then(res => {
          this.comments = res.data
        })
      }
    }
  }
</script>

<style scoped>
#detail {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  background-color: #FFFFFF;
}

.scroll {
  height: calc(100vh - 89px);
  overflow: hidden;
}
</style>
