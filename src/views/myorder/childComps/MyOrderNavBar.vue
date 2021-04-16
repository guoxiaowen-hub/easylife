<template>
  <div class="order-nav-bar">
    <nav-bar class="nav-bar">
      <template #center>
        <div class="nav-bar-center">我的订单</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "MyOrderNavBar",
    data() {
      return {
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>
.nav-bar {
  background-color: #ff5777;
}

.nav-bar-center {
  color: #FFFFFF;
  padding-top: 12px;
}

</style>
