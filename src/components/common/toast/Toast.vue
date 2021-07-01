<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      message: {
        type: String,
        default: ''
      },
      isShow: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style scoped>
.toast {
  width: 157px;
  height: 30px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  position: fixed;
  background-color: rgba(0,0,0,0.7);
  color: #FFFFFF;
  left: 30%;
  bottom: 170px;
  padding-top: 6px;
}
</style>
