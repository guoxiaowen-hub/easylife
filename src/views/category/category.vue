<template>
  <div id="category">
    <category-nav-bar/>
    <category-tab-control class="tab-control"
                          :titles="titles"/>
    <scroll class="scroll"
            ref="scroll"
            :probe-type="0"
            :pull-up-load="true"
            @pulling-up="loadMore">
      <meishi-list :meishiList="meishi.list" v-if="$store.state.CategoryCurrentIndex == 0"/>
      <goods-list :goods="goods.list" v-if="$store.state.CategoryCurrentIndex == 1"/>
    </scroll>
  </div>
</template>

<script>
  import CategoryNavBar from "./childComps/CategoryNavBar";
  import CategoryTabControl from "@/views/category/childComps/CategoryTabControl";

  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";
  import MeishiList from "components/content/meishi/MeishiList";

  import {getCategoryGoods,getCategoryMeishi} from "network/category";

  export default {
    name: "category",
    data() {
      return {
        titles: ['美食','电商'],
        goods: {
          page: 0,
          list: [],
        },
        meishi: {
          page: 0,
          list: [],
        }
      }
    },
    components: {
      CategoryNavBar,
      CategoryTabControl,
      GoodsList,
      MeishiList,
      Scroll
    },
    created() {
      //1.请求美食数据
      this.handleMeishi();
      //2.请求电商数据
      this.handleGoods();
    },
    methods: {
      /**
       * 事件监听模块
       */
      loadMore() {
        if(this.$store.state.CategoryCurrentIndex === 0) {
          this.handleMeishi();
        }
        else if(this.$store.state.CategoryCurrentIndex === 2) {
          this.handleGoods();
        }
      },
      /**
       *网络请求相关
       */
      handleMeishi() {
        this.meishi.page += 1
        getCategoryMeishi(this.meishi.page).then(res => {
          this.meishi.list.push(...res.data)
          this.$refs.scroll.finishPullUp();
        })
      },
      handleGoods() {
       this.goods.page += 1
        getCategoryGoods(this.goods.page).then(res => {
          this.goods.list.push(...res.data.data.list);
          this.$refs.scroll.finishPullUp();
        })
      },
    }
  }
</script>

<style scoped>
.tab-control {
  height: 30px;
  position: relative;
  z-index: 999;
}

.scroll {
  height: calc(100vh - 123px);
  overflow: hidden;
}
</style>
