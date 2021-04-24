 <template>
  <div id="profile">
    <div class="top-box">
      <profile-info @login="login"
                    :userId="profile.myId"
                    :userName="profile.myName"
                    :userImg="profile.myImg"/>
      <profile-function />
    </div>
    <div class="bottom-box">
      <profile-order-bar/>
    </div>
  </div>
</template>

<script>
  import ProfileInfo from "views/profile/childComps/ProfileInfo";
  import ProfileFunction from "views/profile/childComps/ProfileFunction";
  import ProfileOrderBar from "views/profile/childComps/ProfileOrderBar";

  import myprofile from 'assets/test/test'

  export default {
    name: "profile",
    data() {
      return{
        profile: {}
      }
    },
    methods: {
      login() {
        this.$store.commit('login', myprofile);
        this.profile = this.$store.state.profile;
        this.$router.replace('/profile')
      }
    },
    components: {
      ProfileInfo,
      ProfileFunction,
      ProfileOrderBar
    },
    created() {
      // setTimeout(()=>{
      //   this.profile = this.$store.state.profile;
      //   console.log(this.profile);
      // },3000)
    }
  }
</script>

<style scoped>
#profile {
  height: 100vh;
  background-color: #F4F4F4;
}

.top-box {
  background-color: #ff5777;
  height: 30vh;
}

.bottom-box {
  height: 10vh;
  width: 90vw;
  border: 1px solid rgba(135,147,154,0.2);;
  background-color: #FFFFFF;
  border-radius: 8px;
  position: absolute;
  top: 27vh;
  left: 5vw;
}
</style>
