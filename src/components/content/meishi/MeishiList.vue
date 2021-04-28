<template>
  <div class="deal">
    <meishi-list-item v-for="item in meishiList" :meishiItem="item"/>
  </div>
</template>

<script>
  import MeishiListItem from "components/content/meishi/MeishiListItem";

  export default {
    name: "DealList",
    props: {
      meishiList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      MeishiListItem
    }
  }
</script>

<style scoped>
.deal {
  width: 100vw;
  padding: 5px 1px;
  display: flex;
  flex-wrap: wrap;

  overflow: hidden;
}
</style>
