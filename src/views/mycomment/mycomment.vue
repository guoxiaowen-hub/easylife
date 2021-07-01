<template>
 <div id="my-comment">
   <my-comment-nav-bar/>
   <scroll :pull-up-load="true"
           class="scroll">
     <my-comment-show v-for="item in comments"
                      :comment="item"/>
   </scroll>
 </div>
</template>

<script>
  import MyCommentNavBar from "views/mycomment/childComps/MyCommentNavBar";
  import MyCommentShow from "views/mycomment/childComps/MyCommentShow";

  import Scroll from "components/common/scroll/Scroll";

  import {getComment} from "network/mycomment";

  export default {
    name: "mycomment",
    data() {
      return {
       comments : []
      }
    },
    created() {
      this.handelComment(this.$store.state.profile.myId)
    },
    methods: {
      handelComment(myId) {
        getComment(myId).then(res => {
          this.comments = res.data
        })
      }
    },
    components: {
      MyCommentShow,
      MyCommentNavBar,
      Scroll
    }
  }
</script>

<style scoped>
#my-comment {
  width: 100vw;
  height: 100vh;
  background-color: #F4F4F4;
  position: absolute;
  z-index: 999;
}

.scroll {
  height: calc(100vh - 44px);
  overflow: hidden;
}
</style>
