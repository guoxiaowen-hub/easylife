<template>
  <div class="meishi-nav-bar">
    <nav-bar class="meishi-nav-bar-main">
      <template #left>
        <div class="meishi-nav-bar-left" @click="backClick">
          <img class="left-img" src="~assets/img/detail/navbar/arrow.svg" alt="">
        </div>
      </template>
      <template #center>
        <div class="meishi-nav-bar-center">
          <div class="item-title"
               :class="{active: index === $parent.currentIndex}"
               @click="itemClick(index)"
               v-for="(item, index) in titles">{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "detailNavbar",
    data() {
      return {
        titles : ['详情','菜品','评价'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      itemClick(index) {
        this.$emit('navClick', index)
      },
      backClick() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
.meishi-nav-bar-main {
  border-bottom: 1px solid rgba(135,147,154,0.1)
}
/*导航栏左边部分*/
.meishi-nav-bar-left{
  padding-top: 9px;
  padding-left: 9px;
}

.left-img {
  width: 25px;
  height: 25px;
}


/*导航栏中间部分*/
.meishi-nav-bar-center {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #FFFFFF;
}

.item-title {
  flex: 1;
  font-size: 14px;
  text-align: center;
  padding-top: 14px;
}

.active {
  color: var(--color-high-text);
}
</style>
