<template>
  <div class="meishi-list-item">
    <div class="container">
      <div class="click-deal" @click="dealClick">
        <img class="img" :src="deal.dealImg" alt="">
        <div class="info">
          <div class="title">{{deal.titles}}</div>
          <div class="prices">
            <span class="NewPrice">￥{{deal.price}}</span>
            <span>门店价￥{{deal.value}}</span>
          </div>
        </div>
      </div>
      <div class="button">
        抢购
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MeishiListItem",
    props: {
      deal: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      dealClick() {
        this.$router.push('/deal/' + this.deal.dealId)
      }
    }
  }
</script>

<style scoped>
  .container {
    font-size: 13px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
  }
  .click-deal {
    display: flex;
  }

  .img {
    margin: 10px 5px 10px 15px;
    width: 80px;
    height: 80px;
  }
  .title {
    color: #000000;
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
  }
  .prices {
    padding-top: 25px;
  }

  .NewPrice {
    color: #F2783A;
    font-size: 18px;
    font-weight: bold;
    margin-right: 7px;
  }

  .button {
    text-align: center;
    width: 60px;
    height: 22px;
    background-color: #FF9900;
    color: #FFFFFF;
    border-radius: 8px;
    position: absolute;
    bottom: 15px;
    right: 20px;
    padding-top: 3px;
  }
</style>
