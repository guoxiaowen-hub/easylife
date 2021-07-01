<template>
  <div class="home-cate-nav-bar">
    <cate-nav-bar>
      <cate-nav-bar-item>
        <div class="cate">
          <img class="img" @click="cateClick(0)" src="~assets/img/home/catenavbar/meishi.png" alt="">
          <div>美食</div>
        </div>
        <div class="cate">
          <img class="img" @click="cateClick(1)" src="~assets/img/home/catenavbar/shop.png" alt="">
          <div>电商</div>
        </div>
      </cate-nav-bar-item>
      <cate-nav-bar-item>
        <div class="cate">
          <img class="img" @click="cateClick(0)" src="~assets/img/home/catenavbar/meishi.png" alt="">
          <div>美食</div>
        </div>
        <div class="cate">
          <img class="img" @click="cateClick(1)" src="~assets/img/home/catenavbar/shop.png" alt="">
          <div>电商</div>
        </div>
      </cate-nav-bar-item>
    </cate-nav-bar>
  </div>
</template>

<script>
  import {CateNavBar, CateNavBarItem} from "components/content/catenavbar"
  export default {
    name: "HomeCateNavBar",
    methods: {
      cateClick(index) {
        switch (index) {
          case 0:
            this.$store.commit('CategoryCurrentIndexChange',index);
            this.$router.replace('category')
            break;
          case 1:
            this.$store.commit('CategoryCurrentIndexChange',index);
            this.$router.replace('category')
            break;
          case 2:
            this.$store.commit('CategoryCurrentIndexChange',index);
            this.$router.replace('category')
            break;
        }
      }
    },
    components:{
      CateNavBar,
      CateNavBarItem
    }
  }
</script>

<style scoped>
  .cate {
    width: 50px;
    height: 50px;
    font-size: 14px;
  }
  .img {
    width: 24px;
    height: 24px;
    margin-left: 2px;
    margin-bottom: 2px;
  }
</style>
