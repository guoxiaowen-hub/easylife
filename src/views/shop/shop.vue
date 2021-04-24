<template>
  <div id="shop">
    <shop-nav-bar/>
    <shop-info :shopInfo="shopInfo"/>
    <goods-list :goods="goods"/>
  </div>
</template>

<script>
  import ShopNavBar from "views/shop/childComps/ShopNavBar";
  import ShopInfo from "views/shop/childComps/ShopInfo";

  import GoodsList from "components/content/goods/GoodsList";

  import {getShopGoods} from "network/shop";

  export default {
    name: "shop",
    data() {
      return {
        shopInfo: {
          shopId : "1cp5kk",
          name: "艾芳女装屋",
          shopLogo: "//s3.mogucdn.com/mlcdn/c45406/180616_08024j2g76l4552k5550fi73k5f3f_200x200.jpg",
          level: 5
        },

        goods: []
      }
    },
    created() {
      this.handleGoods('pop');
    },
    methods: {
      handleGoods(type) {
        getShopGoods(type, 1).then(res => {
          this.goods = res.data.data.list
        })
      },
    },
    components: {
      ShopNavBar,
      ShopInfo,
      GoodsList
    }
  }
</script>

<style scoped>
  #shop {
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    position: absolute;
    z-index: 999;
  }
</style>
