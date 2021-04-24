<template>
  <div class="new-order-nav-bar">
    <nav-bar class="nav-bar">
      <template #left>
        <div class="nav-bar-left" @click="backClick">
          <img class="left-img" src="~assets/img/login/navbar/arrow.png" alt="">
        </div>
      </template>
      <template #center>
        <div class="nav-bar-center">确认订单</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "RAddressNavBar",
    props: {
      title: String
    },
    components: {
      NavBar
    },
    methods: {
      backClick() {
        this.$router.back();
      }
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

/*导航栏左边部分*/
.nav-bar-left{
  padding-top: 9px;
  padding-left: 9px;
}

.left-img {
  width: 25px;
  height: 25px;
}
</style>
