<template>
  <div class="order-nav-bar">
    <nav-bar class="nav-bar">
      <template #center>
        <div class="nav-bar-center">我的订单</div>
      </template>
    </nav-bar>

    <tab-control class="tab-control" :titles="titles"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  import tabControl from "components/content/tabControl/tabControl";

  export default {
    name: "OrderNavBar",
    data() {
      return {
        titles: ['全部','待付款','待使用','待评价(1)'],
      }
    },
    components: {
      NavBar,
      tabControl
    }
  }
</script>

<style scoped>
.nav-bar {
  background-color: #ff5777;
  padding-top: 11px;
}

.nav-bar-center {
  color: #FFFFFF;
}

</style>
