<template>
  <div class="deal-list-item">
    <div class="meishi-container" v-if="meishiItem.type == 0" @click="dealClick(meishiItem.shopId)">
      <div>
        <img class="img" :src="meishiItem.shopImg" alt="">
      </div>
      <div class="info">
        <div class="name">
          {{meishiItem.name}}
        </div>
        <div class="score">
          <img src="~assets/img/score/start.png" alt="">
          <div>
            {{meishiItem.score}}分好店
          </div>
        </div>
        <div class="address">
          {{meishiItem.address}}
        </div>
        <div class="price">
          <span>人均</span>
          ￥{{avgPrice}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DealListItem",
    props: {
      meishiItem:  {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      avgPrice() {
        return this.meishiItem.avgPrice.toFixed(2)
      }
    },
    methods: {
      dealClick(shopId) {
        this.$router.push('/meishi/'+ shopId)
      }
    }
  }
</script>

<style scoped>
  .deal-list-item {
    border-bottom: 1px solid rgba(135,147,154,0.3);
    border-radius: 8px;
    width: 95vw;
    margin: 2px 14px;
  }

  .meishi-container {
    display: flex;
    padding-bottom: 7px;
  }

  .img {
    width: 100px;
    height: calc( 100px * 9 /12 );
  }

  .info {
    margin-left: 7px;
  }

  .name {
    width: calc( 95vw - 107px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-top: 7px;
    color: #000000;
    font-weight: bold;
  }

  .score {
    font-size: 13px;
    color: #000000;
    display: flex;
  }

  .score > img {
    width: 20px;
  }

  .score > div {
    font-size: 13px;
    padding-top: 2px;
  }

  .address {
    font-size: 13px;
  }

  .price {
    margin-top: 1px;
    color: #F2783A;
  }

  .price > span {
    font-size: 13px;
    color: #787878;
  }
</style>
