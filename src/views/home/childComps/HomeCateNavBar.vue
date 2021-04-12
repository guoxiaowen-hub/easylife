<template>
  <cate-nav-bar>
    <cate-nav-bar-item>
      <div class="cate">
        <img class="img" src="~assets/img/home/catenavbar/food.png" alt="">
        <div>美食</div>
      </div>
      <div class="cate">
        <img class="img" src="~assets/img/home/catenavbar/food.png" alt="">
        <div>美食</div>
      </div>
      <div class="cate">
        <img class="img" src="~assets/img/home/catenavbar/food.png" alt="">
        <div>美食</div>
      </div>
      <div class="cate">
        <img class="img" src="~assets/img/home/catenavbar/food.png" alt="">
        <div>美食</div>
      </div>
      <div class="cate">
        <img class="img" src="~assets/img/home/catenavbar/food.png" alt="">
        <div>美食</div>
      </div>
      <div class="cate">
        <img class="img" src="~assets/img/home/catenavbar/food.png" alt="">
        <div>美食</div>
      </div>
      <div class="cate">
        <img class="img" src="~assets/img/home/catenavbar/food.png" alt="">
        <div>美食</div>
      </div>
      <div class="cate">
        <img class="img" src="~assets/img/home/catenavbar/food.png" alt="">
        <div>美食</div>
      </div>
      <div class="cate">
        <img class="img" src="~assets/img/home/catenavbar/food.png" alt="">
        <div>美食</div>
      </div>
    </cate-nav-bar-item>
    <cate-nav-bar-item>
      <div>
        <img class="img" src="~assets/img/home/catenavbar/food.png" alt="">
        <div>美食</div>
      </div>
      <div>
        <img class="img" src="~assets/img/home/catenavbar/food.png" alt="">
        <div>美食</div>
      </div>
      <div>
        <img class="img" src="~assets/img/home/catenavbar/food.png" alt="">
        <div>美食</div>
      </div>
      <div>
        <img class="img" src="~assets/img/home/catenavbar/food.png" alt="">
        <div>美食</div>
      </div>
    </cate-nav-bar-item>
  </cate-nav-bar>
</template>

<script>
  import {CateNavBar, CateNavBarItem} from "components/content/catenavbar"
  export default {
    name: "HomeCateNavBar",
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
    margin: auto 7px;
  }
  .img {
    width: 24px;
    height: 24px;
  }
</style>
