<template>
  <div class="my-comment-show">
    <div class="user">
      <img class="user-img" src="~assets/test/1.webp.jpg" alt="">
      <div class="user-name">{{comment.name}}</div>
    </div>
    <div class="content">
      <div>“{{comment.content}}”</div>
    </div>
    <div class="deal">
      <img class="deal-img" :src="comment.dealImg" alt="">
      <div class="deal-name">{{comment.dealName}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyCommentShow",
    props: {
      comment: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.my-comment-show {
  width: 95vw;
  background-color: #FFFFFF;
  margin: 2.5vw;
  padding: 5px;
}

/*用户块*/
.user {
  display: flex;
  padding: 5px;
}
.user > .user-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.user > .user-name {
  font-size: 14px;
  color: #000000;
  padding: 8px;
  font-weight: bold;
}


/*商品块*/
.deal {
  background-color: #F6F6F6;
  display: flex;
  padding: 5px;
}
.deal > .deal-img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.deal > .deal-name {
  font-size: 14px;
  color: #000000;
  padding: 16px 8px 8px;
}

/*内容块*/
.content {
  padding-left: 2px;
}
</style>
