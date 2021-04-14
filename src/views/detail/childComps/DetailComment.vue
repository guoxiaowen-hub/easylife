<template>
  <div  class="detail-comment">
    <comment :commentCount="3">
      <comment-item></comment-item>
      <comment-item></comment-item>
      <comment-item></comment-item>
    </comment>
  </div>
</template>

<script>
  import {Comment, CommentItem} from "components/content/comment"
  export default {
    name: "DetailComment",
    components: {
      Comment,
      CommentItem
    }
  }
</script>

<style scoped>
  .detail-comment {
    padding-bottom: 7px;
    border-bottom: 3px solid rgba(135,147,154,0.2);;
  }
</style>
