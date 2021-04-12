<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
  }
</script>

<style scoped>
  @import "~assets/css/base.css";
  #tab-bar {
    display: flex;
    background-color: #F7F5F7;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -3px 1px rgba(100,100,100,0.1);
  }
</style>
