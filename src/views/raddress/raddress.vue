<template>
  <div class="address">
    <r-address-nav-bar title="我的收货地址"/>
    <r-address-item v-for="(item,index) in address" :address="item" :index="index" @AddressIndexChange="toast"/>
    <new-address @click="newClick"/>
    <toast message="默认地址已更改" :isShow="toastIsShow"/>
    <router-view/>
  </div>
</template>

<script>
  import RAddressNavBar from "views/raddress/childComps/RAddressNavBar";
  import RAddressItem from "views/raddress/childComps/RAddressItem";
  import NewAddress from "views/raddress/childComps/NewAddress";

  import Toast from "components/common/toast/Toast";

  export default {
    name: "raddress",
    data() {
      return {
        address: [],
        toastIsShow: false
      }
    },
    created() {
      this.address = this.$store.state.profile.address;
    },
    components: {
      RAddressNavBar,
      RAddressItem,
      NewAddress,
      Toast
    },
    methods: {
      newClick() {
        this.$router.push('/raddress/addresschange/-1')
      },
      toast() {
        this.toastIsShow = true;
        setTimeout(() => {
          this.toastIsShow = false;
        }, 2000)
      }
    }
  }
</script>

<style scoped>
.address {
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
  position: absolute;
  z-index: 900;
}
</style>
