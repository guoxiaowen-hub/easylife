<template>
  <div class="base">
    <div class="container">
      <div class="top">
        <div :class="login" @click="loginStateClick">登录</div>
        <div :class="signin" @click="signinStateClick">注册</div>
      </div>
      <div class="bottom">
        <div class="table">
          <div class="user">
            <label for="user">账号: </label>
            <input type="text" id="user" placeholder="请输入账号" v-model="user">
          </div>
          <div class="user-password">
            <label for="password">密码: </label>
            <input type="password" id="password" v-model="password">
          </div>
          <div class="user-password" v-if="currentIndex == 1">
            <label for="password">昵称: </label>
            <input type="text" id="name" v-model="name">
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
  import {signIn} from "network/login"
  export default {
    name: "LoginBase",
    data() {
      return {
        currentIndex: 0,
        user: '',
        password: '',
        name: ''
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
        this.$store.dispatch('login', {
          user: this.user,
          password: this.password
        }).then( res => {
          this.$emit('login')
        });
      },
      signinClick() {
        signIn({
          user: this.user,
          password: this.password,
          name: this.name,
        }).then(res => {
          console.log(res);
        })
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
    text-align: center;
    background-color: #ff5777;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-bottom: 11px;
  }

  .user,
  .user-password {
    padding-top: 20px;
    color: #FFFFFF;
    letter-spacing: 5px;
    padding-left: 14px;
  }

  .user > input,
  .user-password > input {
    width: 50%;
    background-color: #ff5777;
    border: 0px;
    border-bottom: 1px solid #FFFFFF;
    color: #FFFFFF;
  }

  .user > input:focus,
  .user-password > input:focus {
    outline: none;
  }

  .user > input::-webkit-input-placeholder{
    color: #FFFFFF;
  }
  .user > input::-moz-placeholder{
  color: #FFFFFF;
  }
  .user > input:-ms-input-placeholder{
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
    margin: 15px 33% 1px;
    padding-top: 2px;
    padding-left: 3px;
    border-radius: 8px;
  }
</style>
