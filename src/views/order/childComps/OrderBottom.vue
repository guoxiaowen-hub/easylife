<template>
  <div class="order-bottom" @click="btnClick">
    <div v-if="orderState == 1">去付款</div>
    <div v-if="orderState == 2">去使用</div>
    <div v-if="orderState == 3">去评价</div>
    <div v-if="orderState == 4">已完成</div>
  </div>
</template>

<script>
  export default {
    name: "OrderBottom",
    props: {
      orderState: Number,
      orderId: Number
    },
    methods: {
      btnClick() {
        if(this.orderState != 4) {
          if(this.orderState == 3){
            this.$router.replace('/comment/'+this.orderId)
          }
          else if(this.orderState == 2){
            this.$router.replace('/orderuse/'+this.orderId)
          }
          else {
            this.$store.dispatch('orderStateChange', this.orderId).then(res => {
              this.$router.replace('/myorder')
            });
          }
        }
        else {
          this.$emit('finish')
        }
      }
    }
  }
</script>

<style scoped>
.order-bottom {
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
