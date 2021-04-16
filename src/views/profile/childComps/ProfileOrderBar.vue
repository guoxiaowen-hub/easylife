<template>
  <div class="profile-order-bar">
    <div class="my-order">
      <img src="~assets/img/profile/order.png" alt="">
      <div>我的订单</div>
    </div>
    <div class="w-pay">
      <img src="~assets/img/profile/pay.png" alt="">
      <div>待付款</div>
    </div>
    <div class="w-use">
      <img src="~assets/img/profile/use.png" alt="">
      <div>待使用</div>
    </div>
    <div class="w-comment">
      <img src="~assets/img/profile/wcomment.png" alt="">
      <div>待评价</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileOrderBar"
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
.w-comment > img{
  width: 30px;
}

.w-pay > div,
.w-use > div,
.w-comment > div {
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
.w-comment{
  width: 30px;
  text-align: center;
  margin: 1px;
}

</style>
