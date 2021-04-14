<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :topImages="topImages"/>
    <detail-base-info :goods="GoodsInfo"/>
    <detail-shop-info :shop="ShopInfo"/>
  </div>
</template>

<script>
  import DetailNavBar from "views/detail/childComps/DetailNavbar";
  import DetailSwiper from "views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "views/detail/childComps/DetailShopInfo";

  import {getDetail, GoodsInfo, ShopInfo} from "network/detail";

  export default {
    name: "detail",
    data() {
      return {
        iid: null,
        topImages: [],
        GoodsInfo: {},
        ShopInfo: {}
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo
    },
    created() {
      this.iid = this.$route.params.id;
      this.handleDetail(this.iid);
    },
    methods: {

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
          console.log(this.ShopInfo);
        })
      }
    }
  }
</script>

<style scoped>

</style>
