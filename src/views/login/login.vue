<template>
  <div id="login">
    <login-nav-bar />
    <login-base @login="login"
                @signin="signin"/>
  </div>
</template>

<script>
  import LoginNavBar from "views/login/childComps/LoginNavBar";
  import LoginBase from "views/login/childComps/LoginBase";

  export default {
    name: "login",
    components: {
      LoginNavBar,
      LoginBase
    },
    methods: {
      login() {
        this.$emit('login');
        this.$router.replace('/profile')
      },
      signin(user, password) {
        console.log("signin", user, password);
      }
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
