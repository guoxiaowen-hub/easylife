<template>
  <div class="Meishi-detail">

    <div v-if="Object.keys(shopInfo).length != 0">
      <div>
        <img class="shop-img" :src="shopInfo.shopImg" alt="" @load="imgLoad">
      </div>

      <div class="title">
        <div class="name">
          {{shopInfo.name}}
        </div>
        <div class="top-info">
          <img src="~assets/img/score/start.png" alt="">
          <div>
            {{shopInfo.score}}分好店 人均<span class="price">￥{{avgPrice}}</span>
          </div>
        </div>
        <div class="bottom-info">
          地址:
          <span>{{shopInfo.address}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "MeishiDetail",
  props: {
    shopInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data() {
    return {
      height: 0,
      isload: false,
    }
  },
  methods: {
    imgLoad() {
      this.height = this.$el.offsetHeight
      this.$emit('loadOver', this.height)
    }
  },
  computed: {
    avgPrice() {
      return this.shopInfo.avgPrice.toFixed(2)
    }
  },
}
</script>

<style scoped>
/*详情样式*/
.shop-img {
  width: 100vw;
}

.name {
  font-size: 20px;
  font-weight: bold;
  color: #000000;
}

.title {
  margin: 5px 2.5vw;
  border-bottom: 1px solid rgba(0, 0 , 0, 0.1);
}

.top-info {
  display: flex;
}
.top-info > img {
  width: 25px;
  padding-top: 3px;
}

.top-info > div {
  font-size: 14px;
  padding-top: 5px;
}

.price {
  font-size: 18px;
  color: #F27E45;
  font-weight: bold;
}

.bottom-info {
  margin-top: 1px;
  font-size: 15px;
  margin-bottom: 5px;
}

.bottom-info > span {
  margin-left: 5px;
}
</style>
