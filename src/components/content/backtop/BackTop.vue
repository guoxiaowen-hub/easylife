<template>
  <div class="back-top">
    <img src="~assets/img/backtop/arrow.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
  }
</script>

<style scoped>
.back-top {
  text-align: center;
  position: fixed;
  right: 3px;
  bottom: 52px;
}
.back-top > img{
  width: 40px;
  height: 40px;
}
</style>
