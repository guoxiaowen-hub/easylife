<template>
  <div id="myorder">
    <my-order-nav-bar class="nav-bar"/>

    <my-order-tab-control class="tab-control"
                 :titles="titles"/>
    <scroll class="scroll"
            :probe-type="0"
            :pull-up-load="true">
      <my-order-info :orderInfo="OrderInfo[$store.state.myOrderCurrentIndex]"/>
    </scroll>
  </div>
</template>

<script>
  import MyOrderNavBar from "views/myorder/childComps/MyOrderNavBar";
  import MyOrderInfo from "views/myorder/childComps/MyOrderInfo";
  import myOrderTabControl from "views/myorder/childComps/myOrderTabControl";

  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "order",
    data() {
      return {
        titles: ['全部','待付款','待使用','待评价','已完成'],
        OrderInfo: [],
        currentType: 0
      }
    },
    components: {
      MyOrderNavBar,
      MyOrderInfo,
      myOrderTabControl,
      Scroll
    },
    created() {
      this.OrderInfo = this.$store.state.Order
      this.titles[3] = '待评价(' + this.OrderInfo[3].list.length + ')'
    },
    methods: {
    }
  }
</script>

<style scoped>
  #myorder {
    height: 100vh;
    background-color: #F4F4F4;
  }
  .nav-bar,
  .tab-control {
    position: relative;
    z-index: 999;
  }

  .scroll {
    height: calc(100vh - 70px);
  }
</style>
