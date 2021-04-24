<template>
  <div class="address-item">
    <div @click="nAddressChange">
      <div class="user-info">
        <span>{{address.name}}</span>
        <span v-if="address.sex == 'man'">先生</span>
        <span v-if="address.sex == 'woman'">女士</span>
        <span>{{address.phone}}</span>
        <span class="address-type" v-if="isNAddress">默认地址</span>
      </div>
      <div class="address-info">
        <span class="address-type" v-if="address.type">{{address.type}}</span>
        <span>{{address.address}}</span>
        <span>{{address.houseNumber}}</span>
      </div>
    </div>
    <div @click="changeClick">
      <img class="button" src="~assets/img/raddress/change.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "RAddressItem",
    props: {
      address: {
        type: Object,
        default() {
          return {}
        }
      },
      index: {
        type: Number
      }
    },
    methods: {
      changeClick() {
        this.$router.push('/raddress/addresschange/' + this.index)
      },
      nAddressChange() {
        this.$store.commit('AddressIndexChange', this.index)
        this.$emit('AddressIndexChange')
      }
    },
    computed: {
      isNAddress() {
        return this.index == this.$store.state.profile.addressIndex
      }
    }
  }
</script>

<style scoped>
.address-item {
  position: relative;
}

.user-info {
  padding-top: 10px;
}
.user-info > span {
  margin: 10px;
  color: #000000;
  font-size: 14px;
}

.address-info {
  padding-top: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 10px;
}
.address-info > span {
  margin: 10px;
  font-size: 14px;
}

.address-type {
  background-color: rgba(82, 156, 211, 0.1);
  padding: 1px 10px;
  color: #0085D1;
}

.button {
  width: 20px;
  position: absolute;
  top: 21px;
  right: 20px;
}
</style>
