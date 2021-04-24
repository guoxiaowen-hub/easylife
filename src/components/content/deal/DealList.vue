<template>
  <div class="deal">
    <deal-list-item v-for="item in dealList" :dealItem="item"/>
  </div>
</template>

<script>
  import DealListItem from "components/content/deal/DealListItem";

  export default {
    name: "DealList",
    props: {
      dealList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      DealListItem
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
