<template>
    <div class="goods">
      <goods-list-item v-for="item in goods" :goodsItem="item"/>
    </div>
</template>

<script>
  import GoodsListItem from "components/content/goods/GoodsListItem";

  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components:{
      GoodsListItem
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .goods {
    width: 100vw;
    padding-left: 4px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
</style>
