<template>
  <div id="order">
    <order-nav-bar/>
    <scroll :pull-up-load="true"
            class="scroll">
      <order-base-info :orderInfo="orderInfo"/>
    </scroll>
    <order-bottom :orderState="orderInfo.orderState" :orderId="orderInfo.orderId" @finish="finish"/>
    <toast message="订单已完成" :isShow="toastIsShow"/>
  </div>
</template>

<script>
  import OrderNavBar from "views/order/childComps/OrderNavBar";
  import OrderBaseInfo from "views/order/childComps/OrderBaseInfo";
  import OrderBottom from "@/views/order/childComps/OrderBottom";

  import Scroll from "components/common/scroll/Scroll";

  import Toast from "components/common/toast/Toast";

  export default {
    name: "order",
    data() {
      return {
        orderId: -1,
        orderInfo: {},
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
      Scroll,
      Toast
    },
    created() {
      this.orderId = this.$route.params.orderid;
      this.$store.state.Order[this.$store.state.myOrderCurrentIndex].list.forEach((item, index) =>{
        if(item.orderId == this.orderId) {
          this.orderInfo = item;
        }
      })
      console.log(this.orderInfo);
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

.scroll {
  height: calc(100vh - 88px);
  overflow: hidden;
}
</style>
