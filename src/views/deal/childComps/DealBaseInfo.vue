<template>
  <div class="deal-base-info">
    <div v-if="Object.keys(deal).length != 0">
      <img class="img" :src="deal.dealImg" alt="" @load="imgload">
      <div class="base-info">
        <div class="title">
          {{deal.titles}}
        </div>
        <div class="price">
          <span class="tag">团购价</span>
          <span class="n-price">￥{{deal.price}}</span>
          <span class="o-price">最高门店价 ￥{{deal.value}}</span>
        </div>
        <div class="other">
          <span class="tag">服务承诺</span>
          <span class="ot">可叠加</span>
          <span class="ot">免预约</span>
          <span class="ot">随时退</span>
          <span class="o">过期自动退款</span>
        </div>
        <div class="button" @click="createOrder">
          立即抢购
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DealBaseInfo",
  props: {
    deal: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgload() {
      this.$emit('loadOver')
    },
    createOrder() {
      if(!this.$store.state.profile.user) {
        this.$router.push('/profile/login')
      }
      else {
        let menu = JSON.stringify(this.$parent.$parent.deal.menu);
        this.$router.push({
          path: '/neworder',
          query: {
            shopName : this.$parent.$parent.deal.name,
            shopLogo : this.$parent.$parent.deal.shopImg,
            shopId : this.$parent.$parent.deal.shopId,
            menu : menu,
            price : this.$parent.$parent.deal.price,
            goodsName : this.$parent.$parent.deal.titles,
            goodsImg : this.$parent.$parent.deal.dealImg,
            goodsId : this.$parent.$parent.deal.dealId,
            num : 1,
            orderType: 0,
          }
        })
      }
      }
  }
}
</script>

<style scoped>
.img {
  width: 100vw;
  height: 50vw;
}

.base-info {
  margin: 7px;
  padding: 18px;
  border-radius: 8px;
  background-color: #FFFFFF;
}

.title {
  font-size: 25px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 7px;
}

.price {
  margin-bottom: 7px;
}

.tag {
  font-size: 14px;
  color: #000000;
  margin-right: 14px;
}
.n-price {
  color: #F2783A;
  font-weight: bold;
  font-size: 22px;
}
.o-price {
  margin-left: 8px;
  font-size: 12px;
  text-decoration:line-through
}

.button {
  margin-left: 70%;
  text-align: center;
  width: 90px;
  height: 30px;
  background-color: #FF9900;
  color: #FFFFFF;
  border-radius: 15px;
  padding-top: 6px;
}

.ot {
  font-size: 13px;
  padding-right: 3px;
  margin: 3px;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
}

.o {
  font-size: 13px;
}
.other {
  margin-bottom: 10px;
}
</style>
