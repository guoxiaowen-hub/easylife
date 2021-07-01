<template>
  <div class="order-use-bottom" @click="btnClick">
    确认使用
  </div>
</template>

<script>
  export default {
    name: "OrderBottom",
    props: {
      orderId: Number
    },
    methods: {
      btnClick() {
        this.$store.dispatch('orderStateChange', this.orderId).then(res => {
          this.$router.replace('/myorder')
        })
      }
    }
  }
</script>

<style scoped>
.order-use-bottom {
  background-color: #ff5777;
  width: 100vw;
  text-align: center;
  padding-top: 11px;
  color: #FFFFFF;
  font-size: 20px;
  height: 44px;
  position: absolute;
  bottom: 0px;
}
</style>
