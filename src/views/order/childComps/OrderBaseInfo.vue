<template>
  <div class="order-base-info">
    <div class="order-state">
      <div v-if="orderInfo.orderState == 1">订单待付款</div>
      <div v-if="orderInfo.orderState == 2">订单待使用</div>
      <div v-if="orderInfo.orderState == 3">订单待评价</div>
      <div v-if="orderInfo.orderState == 4">订单已完成</div>
    </div>
    <div class="order-goods-shop">
        <div class="shop-info">
          <img class="shop-logo" :src="orderInfo.shopLogo" alt="">
          <div class="shop-name">{{orderInfo.shopName}}</div>
        </div>
        <div class="goods-info">
          <div class="goods-img">
            <img :src="orderInfo.goodsImg" alt="">
          </div>
          <div class="goods-name-num">
            <div class="goods-name">
              {{orderInfo.goodsName}}
            </div>
            <div class="goods-num">
              x{{orderInfo.num}}
            </div>
          </div>
          <div class="goods-price">
            ￥{{orderInfo.price}}
          </div>
        </div>
      <div class="total-price">
        <div class="text">
          合计
        </div>
        <div class="tot-price">
          ￥{{price}}
        </div>
      </div>
    </div>
    <div class="send-info">
      <div class="send-title">配送信息</div>
      <div class="address">
        <div>配送地址</div>
        <div>
          <div class="text">{{address}}</div>
          <div class="text">{{user}}</div>
        </div>
      </div>
      <div class="send-method">
        <div>配送服务</div>
        <div class="text">默认快递</div>
      </div>
    </div>
    <!--订单信息 -->
    <div class="order-info">
      <div class="order-title">
        订单信息
      </div>
      <div class="order-id">
        <div>订单号码</div>
        <div class="text">{{orderInfo.orderId}}</div>
      </div>
      <div class="order-time">
        <div>下单时间</div>
        <div class="text">{{orderInfo.orderTime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderBaseInfo",
    props: {
      orderInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      price() {
        return this.orderInfo.total.toFixed(2)
      },
      address() {
        return this.orderInfo.address.address + this.orderInfo.address.houseNumber
      },
      user() {
        let sex;
        if(this.orderInfo.address.sex == 'man') {
          sex = '先生'
        }
        else if(this.orderInfo.address.sex == 'woman') {
          sex = '女士'
        }
        return this.orderInfo.address.name + '(' + sex + ')' + this.orderInfo.address.phone
      }
    }
  }
</script>

<style scoped>
  /*订单状态*/
  .order-state {
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #000000;
  }
  /* 商店和商品信息 */
  /* 商店信息 */
  .order-goods-shop {
    width: 95vw;
    background-color: #FFFFFF;
    margin: 2.5vw;
  }

  .shop-info {
    display: flex;
    padding: 10px 7px 7px;
    border-bottom: 1px solid rgba(135,147,154,0.3);
  }
  .shop-logo {
    width: 30px;
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
  /*物品信息*/
  .goods-info {
    display: flex;
    padding: 6px;
    border-bottom: 1px solid rgba(135,147,154,0.3);
  }

  .goods-img > img {
    width: 60px;
  }

  .goods-name-num {
    margin-left: 6px;
  }

  .goods-name-num > .goods-name {
    margin-top: 7px;
    font-size: 14px;
    color: #000000;
  }
  .goods-name-num > .goods-num {
    margin-top: 7px;
    font-size: 13px;
  }

  .goods-price {
    margin-top: 7px;
    font-size: 14px;
    color: #000000;
    font-weight: bold;
  }

  /* 总价 */
  .total-price {
    display: flex;
    justify-content: flex-end;
    margin: 7px;
  }
  .total-price > .text {
    padding: 3px;
    font-size: 14px;
  }

  .total-price > .tot-price {
    font-size: 18px;
    color: #FD761E;
    padding-right: 7px;
  }

  /* 配送信息和订单信息 */
  .send-info,
  .order-info {
    width: 95vw;
    background-color: #FFFFFF;
    margin: 2.5vw;
  }
  .send-title,
  .order-title {
    font-size: 16px;
    color: #000000;
    font-weight: bold;
    padding: 10px 7px 7px;
    border-bottom: 1px solid rgba(135,147,154,0.3);
  }
  .address,
  .order-id {
    font-size: 14px;
    display: flex;
    padding: 7px;
    justify-content: space-between;
  }
  .send-method,
  .order-time {
    font-size: 14px;
    display: flex;
    padding: 7px 7px 15px;
    justify-content: space-between;
  }

  .text {
    color: #000000;
  }
</style>
