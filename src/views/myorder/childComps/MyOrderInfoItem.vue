<template>
  <div class="order-info-item">
    <div class="order-title">
      <img class="shop-logo" :src="order.shopLogo" alt="">
      <div class="shop-name">{{order.shopName}}</div>
    </div>
    <div class="order-base-info">
      <div>
        <img class="goods-img" :src="order.goodsImg" alt="">
      </div>
      <div class="goods-info-text">
        <div class="goods-name">商品名称: {{order.goodsName}}</div>
        <div class="order-time">下单时间: {{order.orderTime}}</div>
        <div class="order-price">总金额: {{price}}元</div>
      </div>
    </div>
    <div class="order-botton">
      <div v-if="order.orderState == 1" @click="orderClick">待付款</div>
      <div v-if="order.orderState == 2" @click="orderClick">待使用</div>
      <div v-if="order.orderState == 3" @click="orderClick">待评价</div>
      <div v-if="order.orderState == 4" @click="orderClick">已完成</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyOrderInfoItem",
    props: {
      order: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      price() {
        return this.order.total.toFixed(2)
      }
    },
    methods: {
      orderClick() {
        this.$router.push('/order/'+ this.order.orderId)
      }
    }
  }
</script>

<style scoped>
  .order-info-item {
    width: 93vw;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 10px;
    border-radius: 8px;
  }

  /*订单标题*/
  .order-title {
    display: flex;
    margin: 1px;
    padding-bottom: 3px;
    position: relative;
    border-bottom: 1px solid rgba(135,147,154,0.3);
  }
  .shop-logo {
    width: 30px;
    height: 30px;
    border: 1px solid rgba(135,147,154,0.3);
    border-radius: 5px;
  }
  .shop-name {
    width: calc(100vw - 150px);
    color: #000000;
    font-size: 14px;
    font-weight: bold;
    margin: 7px 10px 1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 订单基本信息 */
  .order-base-info {
    display:flex;
    margin-top: 5px;
    padding: 0px 3px;
  }
  /*订单信息图像部分*/
  .goods-img {
    width: 50px;
    height: 60px;
    border-radius: 5px;
    margin-right: 5px;
  }
  /*订单信息文本部分*/
  .goods-info-text > div{
    width: calc(100vw - 150px);
    font-size: 13px;
    letter-spacing: 0.5px;
    margin-top: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /*订单信息按钮部分*/
  .order-botton {
    position: relative;
    height: 22px;
  }
  .order-botton > div {
    height: 20px;
    width: 80px;
    padding-top: 2px;
    background-color: #FF5777;
    font-size: 14px;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;
    position: absolute;
    right: 3px;
    top: 3px;
  }
</style>
