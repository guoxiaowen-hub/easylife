<template>
  <div class="bottom-bar">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
  import BottomBarItem from "./BottomBarItem";
  export default {
    name: "BottomBar",
    components: {
      BottomBarItem
    }
  }
</script>

<style scoped>
  .bottom-bar{
    box-shadow: 0px -3px 1px rgba(100,100,100,0.1);
    display: flex;
  }
</style>
