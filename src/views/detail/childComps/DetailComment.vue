<template>
  <div  class="detail-comment">
    <comment :commentCount="comments.length">
      <comment-item v-for="item in comments" :comment="item"/>
    </comment>
  </div>
</template>

<script>
  import {Comment, CommentItem} from "components/content/comment"
  export default {
    name: "DetailComment",
    props: {
      comments: {
        type: Object,
        default() {
          return {}
        }
      }
    },
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
