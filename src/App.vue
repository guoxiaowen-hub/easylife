<template>
  <router-view v-slot="{ Component }">
    <keep-alive exclude="meishi,detail,order,neworder,deal,myorder,comment,mycomment,search,orderuse">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <MainTabBar></MainTabBar>
</template>

<script>
  import MainTabBar from "components/content/MainTabBar/MainTabBar";

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "~assets/css/base.css";
</style>
