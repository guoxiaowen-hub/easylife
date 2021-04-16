<template>
  <div id="login">
    <login-nav-bar />
  </div>
</template>

<script>
  import LoginNavBar from "views/login/childComps/LoginNavBar";

  export default {
    name: "login",
    components: {
      LoginNavBar
    }
  }
</script>

<style scoped>
#login {
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
  position: absolute;
  z-index: 999;
}
</style>
