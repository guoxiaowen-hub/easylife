<template>
  <div class="new-order">
    <new-order-nav-bar/>
    <new-order-address v-if="order.orderType == 1"/>
    <new-order-base-info :order="order" @sub="sub" @add="add"/>
    <new-order-bottom-bar :order="order" @subOrder="subOrder"/>
  </div>
</template>

<script>
  import { Order } from "network/neworder";
  import NewOrderNavBar from "views/neworder/childComps/NewOrderNavBar";
  import NewOrderAddress from "views/neworder/childComps/NewOrderAddress";
  import NewOrderBaseInfo from "views/neworder/childComps/NewOrderBaseInfo";
  import NewOrderBottomBar from "views/neworder/childComps/NewOrderBottomBar";

  export default {
    name: "neworder",
    data() {
      return {
        order : null
      }
    },
    methods: {
      sub() {
        this.order.num--
      },
      add() {
        this.order.num++
      },
      subOrder() {
        this.order['total'] = this.order.num * this.order.price;
        this.$store.dispatch('subOrder', this.order).then(res => {
          this.$router.replace('/myorder')
        })
      }
    },
    created() {
      this.order = new Order(this.$route.query);
    },
    components: {
      NewOrderNavBar,
      NewOrderAddress,
      NewOrderBaseInfo,
      NewOrderBottomBar
    }
  }
</script>

<style scoped>
 .new-order {
   width: 100vw;
   height: 100vh;
   background-color: #F8F8F8;
   position: relative;
   z-index: 999;
 }
</style>
