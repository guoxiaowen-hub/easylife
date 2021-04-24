<template>
  <div id="setting">
    <setting-nav-bar title="设置界面"/>
    <setting-base />


  </div>
</template>

<script>
  import SettingNavBar from "views/setting/childComps/SettingNavBar";
  import SettingBase from "views/setting/childComps/SettingBase";

  export default {
    name: "setting",
    components: {
      SettingNavBar,
      SettingBase
    }
  }
</script>

<style scoped>
  #setting {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #FFFFFF;
    z-index: 100;
  }
</style>
