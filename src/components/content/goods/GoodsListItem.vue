<template>
  <div class="goods-list-item" @click="goodsClick(goodsItem.iid)">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-list-item-text">
      <p class="goods-list-item-text-title">{{goodsItem.title}}</p>
      <div class="goods-price-cfav">
        <span class="goods-price">￥{{goodsItem.price}}</span>
        <span>|</span>
        <span class="goods-cfav">☆收藏{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      goodsClick(goodsiid) {
        this.$router.push('/detail/' + goodsiid)
      },
    }
  }
</script>

<style scoped>
  .goods-list-item {
    border-bottom: 1px solid rgba(135,147,154,0.3);
    border-radius: 8px;
    width: 150px;
    margin: 2px 14px;
  }

  .goods-list-item > img {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    width: 150px;
  }

  .goods-list-item-text-title {
    height: 15px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .goods-list-item-text {
    height: 30px;
  }

  .goods-list-item-text > .goods-price-cfav {
    font-size: 12px;
  }

  .goods-price-cfav > .goods-price {
    color : #D43E2E;
    margin-right: 2px;
  }

  .goods-price-cfav > .goods-cfav {
    margin-left: 2px;
    color: #F2793C;
  }
</style>
