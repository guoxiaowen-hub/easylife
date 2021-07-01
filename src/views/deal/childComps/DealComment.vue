<template>
  <div class="deal-comment">
    <comment :commentCount="comments.length">
      <comment-item v-for="item in comments" :comment="item"/>
    </comment>
  </div>
</template>

<script>
  import {Comment, CommentItem} from "components/content/comment"
  export default {
    name: "MeishiComment",
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
  .deal-comment {
    padding-bottom: 7px;
    border-bottom: 1px solid rgba(135,147,154,0.2);;
    margin: 7px;
    background-color: #FFFFFF;
    border-radius: 8px;
  }
</style>
