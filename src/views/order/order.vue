<template>
  <div id="order">
    <order-nav-bar/>
    <order-base-info :orderInfo="orderInfo"/>
    <order-bottom :orderState="orderInfo.orderState" :orderIndex="orderIndex" @finish="finish"/>
    <toast message="订单已完成" :isShow="toastIsShow"/>
  </div>
</template>

<script>
  import OrderNavBar from "views/order/childComps/OrderNavBar";
  import OrderBaseInfo from "views/order/childComps/OrderBaseInfo";
  import OrderBottom from "@/views/order/childComps/OrderBottom";

  import Toast from "components/common/toast/Toast";

  export default {
    name: "order",
    data() {
      return {
        orderId: -1,
        orderInfo: {},
        orderIndex: -1,
        toastIsShow: false
      }
    },
    methods: {
      finish() {
        this.toastIsShow = true;
        setTimeout(()=> {
          this.toastIsShow = false;
        },2000)
      }
    },
    components:{
      OrderBottom,
      OrderNavBar,
      OrderBaseInfo,
      Toast
    },
    created() {
      this.orderId = this.$route.params.orderid;
      this.$store.state.Order[this.$store.state.myOrderCurrentIndex].list.forEach((item, index) =>{
        if(item.orderId == this.orderId) {
          this.orderIndex = index
          this.orderInfo = item;
        }
      })
    }
  }
</script>

<style scoped>
#order {
  width: 100vw;
  height: 100vh;
  background-color: #F4F4F4;
  position: relative;
  z-index: 999;
}
</style>
