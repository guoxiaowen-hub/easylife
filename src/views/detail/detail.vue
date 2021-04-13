<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
  import DetailNavBar from "views/detail/childComps/detailNavbar";

  export default {
    name: "detail",
    data() {
      return {
        iid: null
      }
    },
    components: {
      DetailNavBar
    },
    created() {
      this.iid = this.$route.params.id
    }
  }
</script>

<style scoped>

</style>
