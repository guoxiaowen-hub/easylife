<template>
  <div class="comment-bottom" @click="btnClick">
    <div>发布评论</div>
  </div>
</template>

<script>
  export default {
    name: "CommentBottom",
    props: {
      orderState: Number,
      orderId: Number
    },
    methods: {
      btnClick() {
        this.$emit("subComment")
      }
    }
  }
</script>

<style scoped>
.comment-bottom {
  background-color: #ff5777;
  width: 100vw;
  text-align: center;
  padding-top: 11px;
  color: #FFFFFF;
  font-size: 20px;
  height: 44px;
  position: absolute;
  bottom: 0px;
}
</style>
