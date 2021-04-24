<template>
  <div id="meishi">
    <detail-nav-bar @navClick="navClick"/>
  </div>
</template>

<script>
  export default {
    name: "meishi",
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      /**
       * 事件监听
       */
      navClick(index) {
        switch (index) {
          case 0 :
            this.currentIndex = 0
            break;
          case 1 :
            this.currentIndex = 1
            break;
          case 2 :
            this.currentIndex = 2
            break;
        }
      },
    }
  }
</script>

<style scoped>
  #meishi {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 100;
    background-color: #FFFFFF;
  }
</style>
