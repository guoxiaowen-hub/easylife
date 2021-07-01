<template>
  <div class="comment-view">
    <div class="title">
      <img class="img" :src="dealInfo.shopLogo" alt="" v-if="dealInfo.shopLogo">
      <img class="img" :src="dealInfo.goodsImg" alt="" v-if="dealInfo.goodsImg">
      <div class="name" v-if="dealInfo.goodsName">{{dealInfo.goodsName}}</div>
      <div class="name" v-if="dealInfo.shopName">{{dealInfo.shopName}}</div>
    </div>
    <div class="input">
      <textarea class="content" name="content" cols="30" rows="10" v-model="content"
                placeholder="请输入商家评论.."
                v-if="dealInfo.shopId"/>
      <div class="length" v-if="dealInfo.shopId">{{content.length}}/100</div>
    </div>
    <div class="input">
    <textarea class="content" name="content" cols="30" rows="10" v-model="content"
              placeholder="请输入商品评论.."
              v-if="dealInfo.goodsId"/>
      <div class="length" v-if="dealInfo.goodsId">{{content.length}}/100</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "CommentView",
    data() {
      return {
        content: ""
      }
    },
    props: {
      dealInfo : {
        type: Object,
        default() {
          return {}
        }
      }
    },
  }
</script>

<style scoped>
.comment-view {
  width: 95vw;
  margin: 2.5vw;
  padding: 10px;
  background-color: #FFFFFF;
  border-radius: 8px;
}

.title {
  display: flex;
  margin: 1px;
  padding-bottom: 3px;
  position: relative;
  border-bottom: 1px solid rgba(135,147,154,0.3);
}
.img {
  width: 50px;
  height: 50px;
  border: 1px solid rgba(135,147,154,0.3);
  border-radius: 5px;
}
.name {
  width: calc(100vw - 30px);
  color: #000000;
  font-size: 14px;
  font-weight: bold;
  padding-top: 14px;
  margin: 7px 10px 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.input {
  position: relative;
}

.length {
  font-size: 10px;
  position: absolute;
  bottom: 10px;
  right: 7px;
}

.content {
  color: #787878;
  padding: 5px;
  margin: 7px 0px 0px;
  width: 90vw;
  height: 100px;
  border: 1px solid rgba(0,0,0,0.1);
}

.content:focus {
  outline: none;
}
</style>
