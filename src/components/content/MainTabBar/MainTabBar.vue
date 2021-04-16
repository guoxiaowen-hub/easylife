<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#D4237A">
      <template #item-icon>
        <img class="img" src="~assets/img/tabbar/home.png">
      </template>
      <template #item-icon-active>
        <img class="img" src="~assets/img/tabbar/home_acitve.png">
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item  path="/category" activeColor="#D4237A">
      <template #item-icon>
        <img class="img" src="~assets/img/tabbar/category.png">
      </template>
      <template #item-icon-active>
        <img class="img" src="~assets/img/tabbar/category_active.png">
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/myorder" activeColor="#D4237A">
      <template #item-icon>
        <img class="img" src="~assets/img/tabbar/order.png">
      </template>
      <template #item-icon-active>
        <img class="img" src="~assets/img/tabbar/order_active.png">
      </template>
      <template #item-text>
        <div>订单</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#D4237A">
      <template #item-icon>
        <img class="img" src="~assets/img/tabbar/profile.png">
      </template>
      <template #item-icon-active>
        <img class="img" src="~assets/img/tabbar/profile_active.png">
      </template>
      <template #item-text>
        <div>个人</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import {TabBar, TabBarItem} from "components/common/tabbar";

  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem,
    }
  }
</script>

<style scoped>

@import "~assets/css/TabBarImg.css";

</style>
