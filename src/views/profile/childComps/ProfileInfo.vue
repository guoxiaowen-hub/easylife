<template>
  <div class="profile-info">
    <router-view @login="login"/>
    <div v-if="userId == -1">
      <div class="container" @click="Click">
        <div class="my-img">
          <img src="~assets/test/userImg.jpg" alt="">
        </div>
        <div class="my-name">请先登录咕~</div>
      </div>
    </div>
    <div v-else>
      <div class="container">
        <div class="my-img">
          <img src="~assets/test/1.webp.jpg" alt="">
        </div>
        <div class="my-name">{{userName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileInfo",
    props: {
      userImg : String,
      userName : String,
      userId: {
        type: Number,
        default: -1
      },
    },
    methods: {
      Click() {
        this.$router.push('/profile/login')
      },
      login() {
        this.$emit('login')
      }
    }
  }
</script>

<style scoped>
.container {
  display: flex;
  padding: 16px 25px 24px;
}

.my-img > img {
  width: 80px;
  border-radius: 50%;
}

.my-name {
  font-size: 25px;
  color: #FFFFFF;
  font-weight: bold;
  margin: 30px;
}
</style>
