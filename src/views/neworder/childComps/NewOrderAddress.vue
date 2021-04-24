<template>
  <div class="new-order-address" @click="addressClick">
    <div class="address">
      {{address.address}} {{address.houseNumber}}
    </div>
    <div class="user">
      {{address.name}} {{address.phone}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewOrderAddress",
    data() {
      return {
      }
    },
    methods: {
      addressClick() {
        this.$router.push('/raddress')
      }
    },
    computed: {
      address() {
        return this.$store.state.profile.address[this.$store.state.profile.addressIndex]
      }
    }
  }
</script>

<style scoped>
.new-order-address {
  background-color: #FFFFFF;
  width: 95vw;
  margin-top: 10px;
  margin-left: 2.5vw;
  padding: 20px;
}
.address {
  font-size: 18px;
  color: #000000;
  margin-bottom: 15px;
}

.user {
  font-size: 14px;
}
</style>
