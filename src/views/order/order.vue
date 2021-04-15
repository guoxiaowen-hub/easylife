<template>
  <div id="order">
    <order-nav-bar></order-nav-bar>
  </div>
</template>

<script>
  import OrderNavBar from "views/order/childComps/OrderNavBar";

  export default {
    name: "order",
    components: {
      OrderNavBar
    }
  }
</script>

<style scoped>

</style>
