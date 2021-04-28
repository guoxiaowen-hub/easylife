<template>
  <div class="meishi-list">
    <meishi-list-item v-for="item in dealList" :deal="item"/>
  </div>
</template>

<script>
  import MeishiListItem from "views/meishi/childComps/MeishiListItem";

  export default {
    name: "MeishiList",
    props: {
      dealList: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      MeishiListItem
    }
  }
</script>

<style scoped>

</style>
