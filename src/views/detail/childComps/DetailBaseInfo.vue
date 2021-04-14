<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">
      {{goods.title}}
    </div>
    <div class="info-price">
      <div>
        <span class="n-price">{{goods.newPrice}}</span>
        <span class="o-price">{{goods.oldPrice}}</span>
      </div>
      <div class="discount">{{goods.discount}}</div>
    </div>
    <div class="info-other">
      <span>{{goods.colunms[0]}}</span>
      <span>{{goods.colunms[1]}}</span>
      <span>{{goods.colunms[2]}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="(item, index) in goods.services">
        <span v-if="index < goods.services.length-1">{{item.name}}·</span>
        <span v-else-if="index = goods.services.length-1">{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      click() {
        console.log(this.goods);
      }
    }
  }
</script>

<style scoped>
.info-title {
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 1px 1px;
}

.info-price {
  margin-top: 5px;
  padding-left: 6px;
  display: flex;
}

.info-price .n-price {
  color: #FF3B3B;
  font-size: 20px;
  padding-right: 4px;
}

.info-price  .o-price {
  text-decoration:line-through;
  font-size : 14px;
  padding-right: 1px;
}

.info-price > .discount {
  font-size: 10px;
  color: #FFFFFF;
  background-color: #FF3B3B;
  border-radius: 8px;
  padding: 2px;
  margin: 2px 3px 5px;
}

.info-other {
  display: flex;
  justify-content: space-between;
  font-size : 14px;
  margin-top: 10px;
  border-bottom: 1px solid rgba(135,147,154,0.1);
}

.info-service {
  margin-top: 10px;
  border-bottom: 3px solid rgba(135,147,154,0.2);
}

.info-service-item > span{
  font-size: 13px;
  color: #F29B1C;
  font-weight: bold;
}
</style>
