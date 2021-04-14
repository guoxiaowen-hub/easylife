<template>
  <div class="comment">
    <div class="comment-title">
      <div class="comment-title-info">商品评价({{commentCount}})</div>
      <div class="comment-title-button">查看全部 ></div>
    </div>
    <div class="comment-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import CommentItem from "./CommentItem";
  export default {
    name: "Comment",
    props: {
      commentCount: {
        type: Number,
        default: 0,
      }
    },
    components: {
      CommentItem
    }
  }
</script>

<style scoped>
.comment-title {
  display: flex;
  justify-content: space-between;
}

.comment-title-info {
  margin: 10px 10px;
  color: #000000;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: bold;
}

.comment-title-button {
  letter-spacing: 1px;
  margin: 10px 10px;
  font-size: 14px;
}
</style>
