<template>
  <div class="deal-detail">
    <div class="head">
      <div>----------------------------------------------------------------</div>
      美食详情
      <div>----------------------------------------------------------------</div>
    </div>

  <div class="body">
    <div class="body-content" v-for="fItem in menu">
      <div class="title" v-if="fItem.length !== 1">
        {{fItem[0].content}}
      </div>
      <div class="right">
        <div v-for="(sItem, sIndex) in fItem" >
          <div v-if="sIndex !== 0">
            <span>{{sItem.content}}</span>
            <span>数量/规格{{sItem.specification}}</span>
            <span>单价￥{{sItem.price}}</span>
            <span>总计￥{{sItem.total}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="total">
    <div>价值: ￥{{totalValue}}</div>
    <div>团购价: <span class="price">￥{{totalPrice}}</span></div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "DealDetail",
    props: {
      menu: {
        type: Array,
        default() {
          return []
        }
      },
      totalPrice: Number,
    },
    computed:{
      totalValue() {
        let total = 0
        this.menu.forEach(fValue => {
          fValue.forEach(sValue => {
            if (sValue.total) {
              total = total + parseInt(sValue.total)
            }
          })
        })
        return total
      }
    }
  }
</script>

<style scoped>
.deal-detail {
  background-color: #FFFFFF;
  margin: 7px;
}

.head {
  font-size: 15px;
  color: #000000;
  font-weight: bold;
  padding: 10px;
  text-align: center;
}

.title {
  font-size: 14px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 3px;
}
.body-content {
  font-size: 10px;
  padding: 7px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.right span {
  margin: 1px 3px;
}

.total {
  display: flex;
  font-size: 14px;
  margin: 7px;
  padding-bottom: 10px;
}

.total div {
  margin: 0px 38px;
}

.price {
  color: #F2783A;
}
</style>
