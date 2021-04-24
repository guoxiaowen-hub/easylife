<template>
  <div class="profile-function">
    <div class="collection">
      <img src="~assets/img/profile/collection.png" alt="">
      <div>收藏</div>
    </div>
    <div class="comment">
      <img src="~assets/img/profile/comment.png" alt="">
      <div>评价</div>
    </div>
    <div class="setting">
      <img @click="settingClick" src="~assets/img/profile/setting.png" alt="">
      <div>设置</div>
    </div>
    <toast class="toast" message="请先登录" :isShow="toastIsShow"/>
  </div>
</template>

<script>
  import Toast from "@/components/common/toast/Toast";
  export default {
    name: "ProfileFunction",
    data() {
      return {
        toastIsShow: false
      }
    },
    components: {
      Toast
    },
    methods: {
      settingClick() {
        if(Object.keys(this.$store.state.profile).length !== 0){
          this.$router.push('/profile/setting')
        }
        else {
          this.toastIsShow = true;
          setTimeout(() => {
            this.toastIsShow = false;
          }, 1000)
        }
      }
    }
  }
</script>

<style scoped>
.profile-function {
  display: flex;
}

.setting {
  margin: -20px 45px;
}

.collection {
  margin: -19.5px 45px;
}

.comment {
  margin: -19.5px 40px auto 50px
}
.comment > img {
  margin-bottom: 1px;
  width: 33px
}

.collection > img,
.setting > img
{
  width: 30px;
}

.collection > div,
.comment > div,
.setting > div {
  font-size: 15px;
  color: #FFFFFF;
}

</style>
