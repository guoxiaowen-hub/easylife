<template>
  <div class="order-info">
    <div v-if="Object.keys(orderInfo).length !== 0">
      <div v-if="orderInfo.list.length == 0" class="order-none">
        该用户没有此类订单
      </div>
      <div v-else>
          <my-order-info-item v-for="item in orderInfo.list"
                           :order="item"/>
      </div>
    </div>
  </div>
</template>

<script>
  import MyOrderInfoItem from "views/myorder/childComps/MyOrderInfoItem";

  export default {
    name: "MyOrderInfo",
    props: {
      orderInfo: {
        type: Object,
        default() {
          return []
        }
      }
    },
    components: {
      MyOrderInfoItem
    }
  }
</script>

<style scoped>
.order-none {
  text-align: center;
  margin: 5px;
}

.order-info {
  display: flex;
}
</style>
