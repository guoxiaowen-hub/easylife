<template>
  <div id="meishi">
    <meishi-nav-bar @navClick="navClick"/>
    <scroll :pull-up-load="true"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            class="scroll">
      <meishi-detail :shopInfo="shopInfo" @loadOver="loadOver"/>
      <meishi-list :dealList="shopInfo.dealList"/>
      <meishi-comment :comments="comments" ref="comment"/>
    </scroll>
  </div>
</template>

<script>
  import MeishiNavBar from "views/meishi/childComps/MeishiNavBar";
  import MeishiDetail from "views/meishi/childComps/MeishiDetail";
  import MeishiList from "views/meishi/childComps/MeishiList";
  import MeishiComment from "views/meishi/childComps/MeishiComment";

  import Scroll from "components/common/scroll/Scroll";

  import {getMeishiDetail,getMeishiComment} from "network/meishi";

  export default {
    name: "meishi",
    data() {
      return {
        shopInfo: {},
        comments: [],
        currentIndex: 0,
        shopId: null,
        dealOffsetTop: 0,
        commentOfferSetTop: 0,
      }
    },
    methods: {
      /**
       * 事件监听
       */
      loadOver(height) {
        this.dealOffsetTop = height
        this.commentOfferSetTop = this.$refs.comment.$el.offsetTop - 44
      },
      navClick(index) {
        switch (index) {
          case 0 :
            this.currentIndex = 0
            this.$refs.scroll.scrollTo(0, 0)
            break;
          case 1 :
            this.currentIndex = 1
            this.$refs.scroll.scrollTo(0, -this.dealOffsetTop)
            break;
          case 2 :
            this.currentIndex = 2
            this.$refs.scroll.scrollTo(0, -this.commentOfferSetTop)
            break;
        }
      },
      contentScroll(position) {
        if( position.y <= -this.commentOfferSetTop) {
          this.currentIndex = 2;
        }
        else if( position.y <= -this.dealOffsetTop) {
          this.currentIndex = 1;
        }
        else {
          this.currentIndex = 0;
        }
      },
      /**
       * 网络请求
       */
      handelMeishiDetail(shopId) {
        getMeishiDetail(shopId).then(res => {
          this.shopInfo = res.data
        })
      },
      handelMeishiComment(shopId) {
        getMeishiComment(shopId).then(res => {
          this.comments = res.data
        })
      }
    },
    created() {
      this.shopId = this.$route.params.id;
      this.handelMeishiDetail(this.shopId);
      this.handelMeishiComment(this.shopId)
    },
    components: {
      MeishiNavBar,
      MeishiDetail,
      MeishiList,
      MeishiComment,
      Scroll
    }
  }
</script>

<style scoped>
  #meishi {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 100;
    background-color: #FFFFFF;
  }

  .scroll {
    height: calc(100vh - 44px);
    overflow: hidden;
  }
</style>
