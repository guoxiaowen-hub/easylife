<template>
  <nav-bar class="nav-bar">
    <template #left>
        <div class="gps">
          <img class="gps-img" src="~assets/img/category/navbar/GPS.png">
          <div class="gps-msg">集美</div>
        </div>
    </template>
    <template #center>
      <div class="search">
        <img class="search-img" src="~assets/img/category/navbar/search.png">
        <div class="search-msg">杨国福麻辣烫(外卖满25减5123123123132)</div>
      </div>
    </template>
    <template #right>
        <div class="more">
          <img class="more-img" src="~assets/img/category/navbar/order.png" >
        </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "CategoryNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
.nav-bar {
  background-color: #ff5777;
}

/*搜索框样式*/
.search {
  width: 95%;
  height: 70%;
  margin-top: 7px;
  border-radius: 8px;
  background-color: #FFFFFF;
  position: relative;
  left: 5px;
}
.search > .search-img {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 6px;
  top: 6px;
}
.search > .search-msg {
  width: 150px;
  position: absolute;
  left: 44px;
  top: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*gps的样式*/
.gps {
  width: 80%;
  height: 80%;
  padding-top: 13px;
  padding-left: 7px;
  display: flex;
  text-align: center;
}
.gps > .gps-img {
  width: 14px;
  height: 14px;
  padding-top: 1px;
}
.gps > .gps-msg {
  color: #3A3A3A;
  white-space:nowrap;
}

/*more的样式*/
.more {
  width: 80%;
  height: 80%;
  padding-top: 8px;
  text-align: center;
}

.more > .more-img{
  width: 28px;
}
</style>
