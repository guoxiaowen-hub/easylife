<template>
  <div class="detail-bottom-bar">
    <bottom-bar>
      <template #left>
          <bottom-bar-item>
            <img class="bar-img" src="~assets/img/detail/bottombar/shop.png" alt="">
            <div class="bar-text">店铺</div>
          </bottom-bar-item>
          <bottom-bar-item>
            <img class="bar-img" src="~assets/img/detail/bottombar/feedback.png" alt="">
            <div class="bar-text">客服</div>
          </bottom-bar-item>
      </template>
      <template #right>
        <div class="bar-buy">
          <div>￥</div>
          <div>立即抢购</div>
        </div>
      </template>
    </bottom-bar>
  </div>
</template>

<script>
  import {BottomBar, BottomBarItem} from "components/content/bottombar"
  export default {
    name: "DetailBottomBar",
    components: {
      BottomBar,
      BottomBarItem
    }
  }
</script>

<style scoped>
.detail-bottom-bar {
  height: 44px;
  width: 100vw;
  background-color: #FFFFFF;
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
  height: 49px;
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
