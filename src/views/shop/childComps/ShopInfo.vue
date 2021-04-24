<template>
  <div class="shop-info">
    <img :src="shopInfo.shopLogo" alt="">
    <div class="name">{{shopInfo.name}}</div>
    <div class="level">{{shopInfo.level}}星好店</div>
  </div>
</template>

<script>
  export default {
    name: "ShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding-top: 15px;
    padding-left: 10px;
    padding-bottom: 10px;
  }

  .shop-info > img {
    width: 40px;
    border: 1px solid rgba(0,0,0,0.1);
  }
  .shop-info > .name {
    font-size: 14px;
    font-weight: bold;
    color: #000000;
    margin-left: 15px;
    margin-top: 10px;
  }
  .shop-info > .level {
    font-size: 14px;
    margin-left: 15px;
    margin-top: 5px;
    margin-bottom: 10px;
    padding-top: 5px;
    text-align: center;
    width: 65px;
    color: #ff5777;
    font-weight: bold;
    background-color: rgba(189,142,62, 0.1);
    border-radius: 8px;
  }
</style>
