<template>
  <div id="order-use">
    <order-use-nav-bar/>
    <div class="qrcode" ref="qrCodeUrl"/>
    <order-use-bottom :orderId="orderId"/>
  </div>
</template>

<script>
  import OrderUseNavBar from "@/views/orderuse/childComps/OrderUseNavBar";
  import OrderUseBottom from "@/views/orderuse/childComps/OrderUseBottom";

  import QRCode from 'qrcodejs2'

  export default {
    name: "orderuse",
    data() {
      return {
        config: {
          value: "www.baidu.com",
        },
        orderId: -1
      }
    },
    methods: {
      creatQrCode() {
        var qrcode = new QRCode(this.$refs.qrCodeUrl, {
          text: '订单号:'+ this.orderId, // 需要转换为二维码的内容
          width: 200,
          height: 200,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H
        })
      },
    },
    components: {
      OrderUseNavBar,
      OrderUseBottom
    },
    created() {
      this.orderId = Number(this.$route.params.orderid);
    },
    mounted() {
      this.creatQrCode();
    }
  }
</script>

<style scoped>
#order-use {
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
  position: relative;
  z-index: 999;
}

.qrcode {
  position: absolute;
  top: 15vh;
  left: calc(50vw - 100px);
}
</style>
