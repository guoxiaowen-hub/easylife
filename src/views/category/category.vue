<template>
  <div id="category">
    <category-nav-bar/>
    <tab-control class="tab-control" :titles="titles"  @tabClick="tabClick"/>
    <scroll class="scroll"
            ref="scroll"
            :probe-type="0"
            :pull-up-load="true"
            @pulling-up="loadMore">
      <goods-list :goods="goods[currentType].list"/>
    </scroll>
  </div>
</template>

<script>
  import CategoryNavBar from "./childComps/CategoryNavBar";

  import Scroll from "components/common/scroll/Scroll";
  import tabControl from "components/content/tabControl/tabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import {getCategoryGoods} from "network/Category";

  export default {
    name: "category",
    data() {
      return {
        titles: ['食品','服饰','数码'],
        goods: {
          'pop' : {page: 0, list: []},
          'new' : {page: 0, list: []},
          'sell' : {page: 0, list: []},
        },
        currentType: 'pop'
      }
    },
    components: {
      CategoryNavBar,
      tabControl,
      GoodsList,
      Scroll
    },
    created() {
      //2.请求商品数据
      this.handleGoods('pop');
      this.handleGoods('new');
      this.handleGoods('sell');
    },
    methods: {
      /**
       * 事件监听模块
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break
        }
      },
      loadMore() {
        this.handleGoods(this.currentType);
      },
      /**
       *网络请求相关
       */
      handleGoods(type) {
        const page = this.goods[type].page + 1
        getCategoryGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
      },
    }
  }
</script>

<style scoped>
.tab-control {
  height: 30px;
}

.scroll {
  height: calc(100vh - 78px);
  overflow: hidden;
}

</style>
