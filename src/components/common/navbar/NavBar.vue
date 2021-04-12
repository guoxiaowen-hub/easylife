<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    width: 100%;
    height: 44px;
  }

  .left,
  .right{
    width: 60px;
    background-color: #ff5777;
  }

  .center {
    flex: 1;
    background-color: #ff5777;
    text-align: center;
  }
</style>
