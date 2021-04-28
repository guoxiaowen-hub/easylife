<template>
  <div class="birthdayChange">
    <setting-nav-bar title="请输入修改的生日"/>
    <input type="text" class="input" v-model="birthday">
    <div class="button" @click="save">确定保存</div>
  </div>
</template>

<script>
  import SettingNavBar from "views/setting/childComps/SettingNavBar";
  export default {
    name: "BirthdayChange",
    data() {
      return {
        birthday: ''
      }
    },
    created() {
      this.birthday = this.$store.state.profile.birthday
    },
    components: {
      SettingNavBar
    },
    methods: {
      save() {
        this.$store.dispatch('update', {birthday : this.birthday})
        this.$router.replace('/profile')
      }
    }
  }
</script>

<style scoped>
.birthdayChange {
  width: 100vw;
  height: 100vw;
  background-color: #FFFFFF;
  position: absolute;
  top: 0px;
  z-index: 999;
}

.input {
  width: 100vw;
  height: 35px;
  font-size: 18px;
  padding: 7px 10px 0px;
  border: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  color: rgba(0, 0, 0, 0.5);
}

.input:focus {
  outline: none;
}

.button {
  width: 100px;
  height: 30px;
  font-size: 18px;
  color: #FFFFFF;
  font-weight: bold;
  text-align: center;
  background-color: #ff5777;
  border-radius: 8px;
  padding-top: 4px;
  margin-left: 118px;
  margin-top: 17px;
}
</style>
