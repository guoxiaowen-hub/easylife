<template>
  <div class="setting-base">
    <div class="name" @click="nameCilck">
      <div>昵称</div>
      <div>{{$store.state.profile.myName}} ></div>
    </div>
    <div class="birthday" @click="birthdayCilck">
      <div>生日</div>
      <div>{{$store.state.profile.birthday}} ></div>
    </div>
    <div class="address" @click="addressCilck">
      <div>地址</div>
      <div>修改/添加 ></div>
    </div>
  </div>
  <router-view />
</template>

<script>
  export default {
    name: "SettingBase",
    data() {
      return {
        nameChange: true
      }
    },
    methods: {
      nameCilck() {
        this.$router.push('/profile/setting/namechange')
      },
      birthdayCilck() {
        this.$router.push('/profile/setting/birthdaychange')
      },
      addressCilck() {
        this.$router.push('/raddress')
      }
    }
  }
</script>

<style scoped>
.name,
.birthday,
.address {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 14px;
  border-bottom: 1px solid rgba(0,0,0,0.3);
}
</style>
