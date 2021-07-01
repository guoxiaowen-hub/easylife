<template>
  <div id="comment">
    <comment-nav-bar/>
      <comment-view :dealInfo="shopInfo" ref="shop"/>
      <comment-view :dealInfo="goodsInfo" ref="goods"/>
      <comment-bottom @subComment="subComment"/>
      <toast :message="toast" :isShow="toastIsShow"/>
  </div>
</template>

<script>
  import CommentNavBar from "views/comment/childComps/CommentNavBar";
  import CommentView from "views/comment/childComps/CommentView";
  import CommentBottom from "views/comment/childComps/CommentBottom";

  import Toast from "components/common/toast/Toast";

  import {subComment, goodsInfo, shopInfo} from "network/comment";

  export default {
    name: "comment",
    data() {
      return {
        orderId: null,
        orderInfo: null,
        shopInfo: {},
        goodsInfo: {},
        toast: "",
        toastIsShow: false,
      }
    },
    methods: {
      subComment() {
        if(this.$refs.shop.content == "" && this.$refs.goods.content == "") {
          this.toast = "请输入评论"
          this.toastIsShow = true;
          setTimeout(()=> {
            this.toastIsShow = false;
          },2000)
        }
        else if(this.$refs.shop.content == "") {
          this.toast = "请输入商家评论"
          this.toastIsShow = true;
          setTimeout(()=> {
            this.toastIsShow = false;
          },2000)
        }
        else if(this.$refs.goods.content == "") {
          this.toast = "请输入商品评论"
          this.toastIsShow = true;
          setTimeout(()=> {
            this.toastIsShow = false;
          },2000)
        }
        else {
          subComment({
            userId: this.$store.state.profile.myId,
            userName: this.$store.state.profile.myName,
            orderId: this.orderId,
            goodsId: this.goodsInfo.goodsId,
            goodsImg: this.goodsInfo.goodsImg,
            goodsName: this.goodsInfo.goodsName,
            goodsContent: this.$refs.goods.content,
            shopId: this.shopInfo.shopId,
            shopLogo: this.shopInfo.shopLogo,
            shopName: this.shopInfo.shopName,
            shopContent: this.$refs.shop.content,
          }).then(res => {
            this.$store.commit("getOrder", res.data)
            this.$router.replace('/myorder')
          })
        }
      }
    },
    created() {
      this.orderId = this.$route.params.orderid
      this.$store.state.Order[0].list.forEach( value => {
        if(value.orderId == this.orderId) {
          this.orderInfo = value
        }
      })
      this.shopInfo = new shopInfo(this.orderInfo);
      this.goodsInfo = new goodsInfo(this.orderInfo);

    },
    components: {
      CommentNavBar,
      CommentView,
      CommentBottom,
      Toast
    },
  }
</script>

<style scoped>
  #comment {
    width: 100vw;
    height: 100vh;
    background-color: #F4F4F4;
    position: relative;
    z-index: 999;
  }
</style>
