<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="detail-goods-info">
    <div class="text-top">
      ---------------
    </div>
    <div class="info-text">
      {{goodsInfo.desc}}
    </div>
    <div class="text-bottom">
      ---------------
    </div>
    <div class="info-img-title">
      {{goodsInfo.detailImage[0].key}}
    </div>
    <div class="info-img">
      <img  v-for="item in goodsInfo.detailImage[0].list"
            :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {
        }
      }
    }
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
/*上部文本*/
.text-top {
  text-align: left;
  font-size: 14px;
  color: #000000;
  padding-left: 7px;
}
.info-text {
  padding: 15px;
  font-size: 14px;
  color: #000000;
  letter-spacing: 1px;
}
.text-bottom {
  text-align: right;
  font-size: 14px;
  color: #000000;
  padding-right: 7px;
}


/*图片部分*/
.info-img-title{
  text-align: left;
  font-size: 14px;
  color: #000000;
  padding-left: 7px;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 5px;
}

.info-img > img {
  width: 100vw;
}
</style>
