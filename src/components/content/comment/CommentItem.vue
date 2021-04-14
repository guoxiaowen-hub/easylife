<template>
  <div class="comment-item">
    <div class="userInfo">
      <img class="user-img" src="~assets/test/1.webp.jpg" alt="">
      <div class="user-name">我是憨憨</div>
    </div>
    <div class="comment-content">
      <div class="content-text">
        我是哈哈哈哈哈哈哈哈哈哈哈哈芜湖起飞我是哈哈哈哈哈哈哈哈哈哈哈哈芜湖起飞我是哈哈哈哈哈哈哈哈哈哈哈哈芜湖起飞
      </div>
      <div class="content-img">
        <img src="~assets/test/test1.jpg" alt="">
        <img src="~assets/test/test2.jpg" alt="">
      </div>
    </div>
  </div>
</template>

  <script>
  export default {
    name: "CommentItem"
  }
</script>

<style scoped>
.userInfo {
  display: flex;
  padding: 5px;
}

.userInfo > .user-img {
  width: 30px;
  border-radius: 50%;
}

.userInfo > .user-name {
  font-size: 14px;
  color: #000000;
  margin: 7px 6px 1px;
}

.content-text {
  padding: 0px 6px;
  color: #666666;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content-img {
  display: flex;
  padding-left: 6px;
}

.content-img > img {
  width: 40px;
  height: 50px;
  margin: 3px 3px;
}

</style>
