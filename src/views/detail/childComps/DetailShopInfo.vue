<template>
  <div class="detail-shop-info">
    <img class="shop-img" :src="shop.shopLogo" alt="">
    <div class="shop-base-info">
      <div class="shop-name">{{shop.name}}</div>
      <div class="shop-goods">商品数量 {{shop.Goods}}</div>
    </div>

    <div class="shop-button">
      进店逛逛
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.detail-shop-info {
  width: 100vw;
  height: 60px;
  border-bottom: 3px solid rgba(135,147,154,0.2);
  display: flex;
  position: relative;
}

.shop-img {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(135,147,154,0.2);
  margin: 7px 7px;
}

.shop-base-info {
  padding-top: 12px;

}

.shop-base-info > .shop-name {
  font-size: 14px;
  color: #000000;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 4px;
}

.shop-base-info > .shop-goods {
  font-size: 13px;
}

.shop-button {
  border: 1px solid rgba(135,147,154,0.5);
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  width: 77px;
  height: 25px;
  padding-top: 3px;

  position: absolute;
  right: 14px;
  top: 16px;
}
</style>
