<template>
  <div class="tab-control">
    <div class="tab-control-item"
         :class="{active : index == currentIndex,
                  borderRight : index!= item.length}"
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
    name: "tabControl",
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
        this.currentIndex = index;
        this.$emit('tabClick',index);
      }
    }
  }
</script>

<style scoped>
.tab-control {
  background-color: #FFFFFF;
  display: flex;
  text-align: center;
  padding: 5px;
  border-top: 1px solid rgba(135,147,154,0.1);
}

.tab-control > .tab-control-item {
  flex:1;
  font-size: 15px;
}

.active > span {
  padding: 5px;
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}

.borderRight {
  border-right: 1px solid rgba(135,147,154,0.5);
}
</style>
