<template>
  <nav-bar>
    <template #left>
      <div class="gps">
        <img class="gps-img" src="~assets/img/home/navbar/GPS.png">
        <div class="gps-msg">集美</div>
      </div>
    </template>
    <template #center>
      <div class="search">
        <img class="search-img" src="~assets/img/home/navbar/search.png">
        <div class="search-msg">杨国福麻辣烫(外卖满25减5123123123132)</div>
      </div>
    </template>
    <template #right>
      <div class="more">
        <img class="more-img" src="~assets/img/home/navbar/more.png" >
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "HomeNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>

/*搜索框样式*/
.search {
  width: 95%;
  height: 70%;
  margin-top: 6px;
  margin-left: 2.5%;
  border-radius: 8px;
  background-color: #FFFFFF;
  position: relative;
}
.search > .search-img {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 5px;
  top: 6px;
}
.search > .search-msg {
  width: 150px;
  position: absolute;
  left: 44px;
  top: 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*gps的样式*/
.gps {
  width: 80%;
  height: 80%;
  margin: 5px auto;
  padding-top: 8px;
  display: flex;
}
.gps > .gps-img {
  width: 14px;
  height: 14px;
  padding-top: 1px;
}
.gps > .gps-msg {
  color: #3A3A3A
}

/*more的样式*/
.more {
  width: 80%;
  height: 80%;
  padding-top: 2px;
  margin: 5px auto;
  text-align: center;
}

.more > .more-img{
  width: 30px;
  height: 30px;
}
</style>
