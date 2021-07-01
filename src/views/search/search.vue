<template>
  <div id="search">
    <search-nav-bar @search="search"/>
    <meishi-list :meishiList="meishiList"/>
  </div>
</template>

<script>
import SearchNavBar from "@/views/search/childComps/SearchNavBar";

import MeishiList from "@/components/content/meishi/MeishiList";

import {Search} from "@/network/search";

export default {
  name: "search",
  data() {
    return {
      meishiList: []
    }
  },
  methods: {
    search(content) {
      Search(content).then(res => {
        this.meishiList = res.data
      })
    }
  },
  components: {
    SearchNavBar,
    MeishiList
  }
}
</script>

<style scoped>
#search {
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
  position: relative;
  z-index: 999;
}
</style>
