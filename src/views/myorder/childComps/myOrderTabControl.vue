<template>
  <div class="my-order-tab-control">
    <div class="tab-control-item"
         :class="{active : index == $store.state.myOrderCurrentIndex,
                  borderRight : index != titles.length - 1}"
         @click="itemClick(index)"
         :key="item"
         v-for="(item, index) in titles">
      <span>
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyOrderTabControl",
    props:{
      titles: {
        Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentIndex : 0
      }
    },
    methods: {
      itemClick(index) {
        this.$store.commit('myOrderCurrentIndexChange', index)
        this.$emit('tabClick',index);
      }
    }
  }
</script>

<style scoped>
.my-order-tab-control {
  background-color: #FFFFFF;
  display: flex;
  text-align: center;
  padding: 5px 5px 3px;
  border-top: 1px solid rgba(135,147,154,0.1);
}

.my-order-tab-control > .tab-control-item {
  flex:1;
  font-size: 12px;
}

.active > span {
  padding: 5px 5px 3px;
  font-size: 12px;
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}

.borderRight {
  border-right: 1px solid rgba(135,147,154,0.5);
}
</style>
