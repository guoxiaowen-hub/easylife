<template>
  <div class="profile-order-bar">
    <div class="my-order" @click="allClick">
      <img src="~assets/img/profile/order.png" alt="">
      <div>我的订单</div>
    </div>
    <div class="w-pay" @click="wpayClick">
      <img src="~assets/img/profile/pay.png" alt="">
      <div>待付款</div>
    </div>
    <div class="w-use" @click="wuseClick">
      <img src="~assets/img/profile/use.png" alt="">
      <div>待使用</div>
    </div>
    <div class="w-comment" @click="wcommentClick">
      <img src="~assets/img/profile/wcomment.png" alt="">
      <div>待评价</div>
    </div>
    <div class="finish" @click="finishClick">
      <img src="~assets/img/profile/finish.png" alt="">
      <div>已完成</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileOrderBar",
  methods: {
    allClick() {
      this.$store.commit('myOrderCurrentIndexChange', 0)
      this.$router.replace('/myorder')
    },
    wpayClick() {
      this.$store.commit('myOrderCurrentIndexChange', 1)
      this.$router.replace('/myorder')
    },
    wuseClick() {
      this.$store.commit('myOrderCurrentIndexChange', 2)
      this.$router.replace('/myorder')
    },
    wcommentClick() {
      this.$store.commit('myOrderCurrentIndexChange', 3)
      this.$router.replace('/myorder')
    },
    finishClick() {
      this.$store.commit('myOrderCurrentIndexChange', 4)
      this.$router.replace('/myorder')
    }
  }
}
</script>

<style scoped>
.profile-order-bar {
  display: flex;
  justify-content: space-evenly;
  padding-top: 4px;
  padding-left: 3px;
}
.my-order > img,
.w-pay > img,
.w-use > img,
.w-comment > img,
.finish > img {
  width: 30px;
}

.w-pay > div,
.w-use > div,
.w-comment > div,
.finish > div {
  font-size: 14px;
  width: 70px;
  text-align: left;
  margin-left: -6px;
}

.my-order > div {
  font-size: 14px;
  width: 70px;
  text-align: left;
  margin-left: -12px;
}

.my-order,
.w-pay,
.w-use,
.w-comment,
.finish{
  width: 30px;
  text-align: center;
  margin: 1px;
}

</style>
