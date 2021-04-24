<template>
  <div class="base">
    <div class="container">
      <div class="top">
        <div :class="login" @click="loginStateClick">登录</div>
        <div :class="signin" @click="signinStateClick">注册</div>
      </div>
      <div class="bottom">
        <div class="table">
          <div class="user-name">
            <label for="username">账号: </label>
            <input type="text" id="username" placeholder="请输入账号" v-model="user">
          </div>
          <div class="user-password">
            <label for="password">密码: </label>
            <input type="password" id="password" v-model="password">
          </div>
          <div @click="loginClick" class="button" v-if="currentIndex == 0">
            登录
          </div>
          <div @click="signinClick" class="button" v-else>
            注册
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginBase",
    data() {
      return {
        currentIndex: 0,
        user: '',
        password: ''
      }
    },
    methods: {
      loginStateClick() {
        this.currentIndex = 0
      },
      signinStateClick() {
        this.currentIndex = 1
      },
      loginClick() {
        this.$emit('login', this.user, this.password)
      },
      signinClick() {
        this.$emit('signin', this.user, this.password);
        this.currentIndex = 0
      }
    },
    computed: {
      login() {
        return {'active': this.currentIndex == 0, 'un-active': this.currentIndex == 1}
      },
      signin() {
        return {'active': this.currentIndex == 1, 'un-active': this.currentIndex == 0}
      }
    }
  }
</script>

<style scoped>
  .container{
    width: 80vw;
    height: 200px;
    position: relative;
    top: 80px;
    left: 10%;
  }

  .top {
    display: flex;
    justify-content: space-around;
    color: #FFFFFF;
  }
  .top > div {
    padding-top: 6px;
    width: 50%;
    height: 30px;
    text-align: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .active {
    background-color: #ff5777;
  }
  .un-active {
    background-color: rgba(212, 35, 122,0.8);
  }

  .table {
    width: 80vw;
    height: 170px;
    background-color: #ff5777;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .user-name,
  .user-password {
    padding-top: 35px;
    color: #FFFFFF;
    letter-spacing: 5px;
    padding-left: 14px;
  }

  .user-name > input,
  .user-password > input {
    background-color: #ff5777;
    border: 0px;
    border-bottom: 1px solid #FFFFFF;
    color: #FFFFFF;
  }

  .user-name > input:focus,
  .user-password > input:focus {
    outline: none;
  }

  .user-name > input::-webkit-input-placeholder{
    color: #FFFFFF;
  }
  .user-name > input::-moz-placeholder{
  color: #FFFFFF;
  }
  .user-name > input:-ms-input-placeholder{
  color: #FFFFFF;
  }

  /*.user-password > input::-webkit-input-placeholder{*/
  /*  color: #FFFFFF;*/
  /*}*/
  /*.user-password > input::-moz-placeholder{*/
  /*  color: #FFFFFF;*/
  /*}*/
  /*.user-password > input:-ms-input-placeholder{*/
  /*  color: #FFFFFF;*/
  /*}*/

  .button {
    color: #FFFFFF;
    letter-spacing: 5px;
    width: 100px;
    height: 28px;
    border: #FFFFFF 3px solid;
    text-align: center;
    margin-top: 17px;
    margin-left: 93px;
    padding-top: 2px;
    padding-left: 3px;
    border-radius: 8px;
  }
</style>
