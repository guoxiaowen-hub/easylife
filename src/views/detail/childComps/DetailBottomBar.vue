<template>
  <div class="detail-bottom-bar">
    <bottom-bar>
      <template #left>
          <bottom-bar-item>
            <div @click="shopIn">
              <img class="bar-img" src="~assets/img/detail/bottombar/shop.png" alt="">
              <div class="bar-text">店铺</div>
            </div>
          </bottom-bar-item>
          <bottom-bar-item>
            <img class="bar-img" src="~assets/img/detail/bottombar/feedback.png" alt="">
            <div class="bar-text">客服</div>
          </bottom-bar-item>
      </template>
      <template #right>
        <div class="bar-buy" @click="buy">
          <div>￥</div>
          <div>立即抢购</div>
        </div>
      </template>
    </bottom-bar>
  </div>
</template>

<script>
  import {BottomBar, BottomBarItem} from "components/content/bottombar"
  import {Order} from "network/detail";

  export default {
    name: "DetailBottomBar",
    data() {
      return {
        order: null,
      }
    },
    components: {
      BottomBar,
      BottomBarItem
    },
    methods: {
      shopIn() {
        this.$router.push('/shop')
      },
      buy() {
        if(!this.$store.state.profile.user) {
          this.$router.push('/profile/login')
        }
        else {
          this.$router.push({
            path: '/neworder',
            query: {
              shopName : this.$parent.ShopInfo.name,
              shopLogo : this.$parent.ShopInfo.shopLogo,
              shopId : this.$parent.ShopInfo.shopId,
              price : this.$parent.GoodsInfo.realPrice,
              goodsName : this.$parent.GoodsInfo.title,
              goodsImg : this.$parent.topImages[0],
              goodsId : this.$parent.iid,
              num : 1,
              orderType: 1,
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
.detail-bottom-bar {
  height: 44px;
  width: 100vw;
  background-color: #FFFFFF;
  position: absolute;
  bottom: 0px;
  padding: 0px 5px;
}

.bar-img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
}

.bar-text {
  flex: 1;
  text-align: center;
  font-size: 10px;
}

.bar-buy {
  width: 200px;
  height: 32px;
  background-color: #FF3B3B;
  padding-top: 1px;
  margin-top: 5px;
  margin-left: 23px;
  text-align: center;
  border-radius: 8px;
}

.bar-buy > div {
  font-size: 2px;
  color: #FFFFFF;
}
</style>
