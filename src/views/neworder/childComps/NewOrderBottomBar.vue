<template>
  <div class="new-order-bottom-bar">
    <bottom-bar>
      <template #left>
        <div class="info">
          <div>合计:</div>
          <div>{{order.num}}件 共</div>
          <div class="total-price">￥{{totalprice}}</div>
        </div>
      </template>
      <template #right>
        <div class="subOrder" @click="subOrder">
          提交订单
        </div>
      </template>
    </bottom-bar>
  </div>
</template>

<script>
  import {BottomBar, BottomBarItem} from "components/content/bottombar"

  export default {
    name: "NewOrderBottomBar",
    components: {
      BottomBar,
      BottomBarItem
    },
    props: {
      order: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      subOrder() {
        this.$emit('subOrder')
      }
    },
    computed: {
      totalprice() {
        return (this.order.price * this.order.num).toFixed(2)
      }
    }
  }
</script>

<style scoped>
.new-order-bottom-bar {
  height: 44px;
  width: 100vw;
  background-color: #FFFFFF;
  position: absolute;
  bottom: 0px;
  padding: 0px 5px;
}

.info {
  display: flex;
  font-size: 14px;
  padding-top: 13px;
}

.total-price {
  font-size: 18px;
  color: #FD761E;
  font-weight: bold;
}

.subOrder {
  width: 120px;
  height: 32px;
  background-color: #FF3B38;
  padding-top: 6px;
  margin-top: 5px;
  text-align: center;
  border-radius: 8px;
  color: #FFFFFF;
}
</style>
