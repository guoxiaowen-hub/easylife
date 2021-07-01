<template>
  <div class="cate-nav-bar-slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CateNavBarItem"
}
</script>

<style scoped>
  .cate-nav-bar-slide {
    width: 100vw;
    flex-shrink: 0;
    display: flex;
    justify-content: space-evenly;
  }
</style>
