<template>
  <div class="search-nav-bar">
    <nav-bar class="nav-bar">
      <template #left>
        <div class="nav-bar-left" @click="backClick">
          <img class="left-img" src="~assets/img/login/navbar/arrow.png" alt="">
        </div>
      </template>
      <template #center>
        <input class="search" type="text" v-model="content" @change="searchInput">
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "SearchNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        content: ""
      }
    },
    methods: {
      backClick() {
        this.$router.back();
      },
      searchInput() {
        this.$emit('search', this.content)
      }
    }
  }
</script>

<style scoped>
.nav-bar {
  background-color: #ff5777;
}

/*中部搜索框*/
.search {
  width: 95%;
  height: 70%;
  padding-left: 5px;
  margin-top: 7px;
  border-radius: 8px;
  background-color: #FFFFFF;
  position: relative;
  left: 5px;
  border: 0px;
}

.search:focus {
  outline: none;
}

/*导航栏左边部分*/
.nav-bar-left{
  padding-top: 9px;
  padding-left: 9px;
}

.left-img {
  width: 25px;
  height: 25px;
}
</style>
