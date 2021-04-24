<template>
  <div class="base-info">
    <div class="shop">
      <img :src="order.shopLogo" alt="">
      <div>
        {{order.shopName}}
      </div>
    </div>

    <!--物品信息部分-->
    <div class="goods">
      <img :src="order.goodsImg" alt="">
      <div class="Info">
        <div class="name">
          {{order.goodsName}}
        </div>
        <div class="price-button">
          <div class="price">
            ￥{{order.price}}
          </div>
          <div class="button">
            <button :disabled="order.num == 1" @click="sub">-</button>
            <div>{{order.num}}</div>
            <button  @click="add">+</button>
          </div>
        </div>
      </div>
    </div>

    <!--其他-->
    <div class="other">
      <div class="methods">
        <div>配送方式</div>
        <div>默认快递</div>
      </div>
    </div>
    <div class="total-price">
      <div>商品总价</div>
      <div class="tot-price">￥{{totalprice}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewOrderBaseInfo",
    props: {
      order: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      totalprice() {
        return (this.order.price * this.order.num).toFixed(2)
      }
    },
    methods: {
      add() {
        this.$emit('add')
      },
      sub() {
        this.$emit('sub')
      }
    }
  }
</script>

<style scoped>
.base-info {
  background-color: #FFFFFF;
  width: 95vw;
  margin-top: 10px;
  margin-left: 2.5vw;
  padding: 20px;
}

/*商店信息样式*/
.shop {
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.shop > img {
  width: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1)
}
.shop > div {
  padding-top: 7px;
  font-size: 14px;
  margin-left: 10px;
  color: #000000;
}

/*商品信息样式*/
.goods {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.goods > img{
  width: 80px;
  height: 105px;
}

.name {
  font-size: 14px;
  margin-left: 5px;
  margin-top: 5px;
}

/*价格和按钮*/
.price-button,
.button {
  display: flex;
  margin-left: 5px;
}

.price {
  margin-top: 25px;
  color: #FD761E;
  font-size: 18px;
  font-weight: bold;
}

.button {
  margin-top: 25px;
  margin-left: 90px;
}

button {
  width: 20px;
  height: 20px;
  margin: 0px 5px;
}


/*其他*/
.methods {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.total-price {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.tot-price {
  color: #FD761E;
  font-weight: bold;
}
</style>
