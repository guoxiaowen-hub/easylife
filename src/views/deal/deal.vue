<template>
  <div id="deal">
    <deal-nav-bar class="nav-bar" @navClick="navClick"/>
    <scroll :pull-up-load="true"
            ref="scroll"
            @scroll="contentScroll"
            :probe-type="3"
            class="scroll">
      <deal-base-info :deal="deal" @loadOver="loadOver"/>
      <deal-detail :menu="deal.menu" :totalPrice="deal.price" ref="detail"/>
      <deal-comment ref="comment"/>
    </scroll>
  </div>
</template>

<script>
  import DealNavBar from "views/deal/childComps/DealNavBar";
  import DealBaseInfo from "views/deal/childComps/DealBaseInfo";
  import DealDetail from "views/deal/childComps/DealDetail";
  import DealComment from "views/deal/childComps/DealComment";

  import Scroll from "components/common/scroll/Scroll";

  import {getDealDetail, dataDeal} from "network/deal";

  export default {
    name: "deal",
    data() {
      return {
        currentIndex: 0,
        dealId: 0,
        deal: {},
        detailOffsetTop: 0,
        commentOfferSetTop: 0
      }
    },
    created() {
      this.dealId = this.$route.params.id;
      this.handelDealDetail(this.dealId);
    },
    methods: {
      /**
       * 监听事件
       */
      loadOver() {
        this.detailOffsetTop = this.$refs.detail.$el.offsetTop - 44
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
            this.$refs.scroll.scrollTo(0, -this.detailOffsetTop)
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
        else if( position.y <= -this.detailOffsetTop) {
          this.currentIndex = 1;
        }
        else {
          this.currentIndex = 0;
        }
      },

      /**
       * 网络请求
       */
      handelDealDetail(dealId) {
        getDealDetail(dealId).then(res => {
          this.deal = dataDeal(res.data);
        })
      }
    },
    components: {
      DealNavBar,
      DealBaseInfo,
      DealDetail,
      DealComment,
      Scroll
    }
  }
</script>

<style scoped>
#deal {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  background-color: #F4F4F4;
}

.nav-bar {
  background-color: #FFFFFF;
}

.scroll {
  height: calc(100vh - 44px);
  overflow: hidden;
}
</style>
