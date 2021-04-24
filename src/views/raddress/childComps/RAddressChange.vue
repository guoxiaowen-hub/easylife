<template>
  <div class="address-change">
    <r-address-nav-bar title="编辑收货地址"/>
    <div class="base-address">
      <span>收货地址: </span>
      <input type="text" v-model="address.address" placeholder="请输入收货地址">
    </div>
    <div class="house-number">
      <span>门牌号: </span>
      <input type="text" v-model="address.houseNumber" placeholder="详细地址，如:13号楼2层201室">
    </div>
    <div class="name">
      <span>联系人: </span>
      <input type="text" v-model="address.name" placeholder="请填写收件人姓名">
    </div>
    <div class="sex">
      <label for="male">
        <input type="radio" id="male" value="man" v-model="address.sex">先生
      </label>
      <label for="female">
        <input type="radio" id="female" value="woman" v-model="address.sex">女士
      </label>
    </div>
    <div class="phone">
      <span>手机号: </span>
      <input type="text" v-model="address.phone" placeholder="请填写收件人手机号">
    </div>
    <div class="type">
      <span>标签: </span>
      <label for="home">
        <input value="家" id="home" type="radio" v-model="address.type">
        <span>家</span>
      </label>
      <label for="school">
        <input value="学校" id="school" type="radio" v-model="address.type">
        <span>学校</span>
      </label>
      <label for="company">
        <input value="公司" id="company" type="radio" v-model="address.type">
        <span>公司</span>
      </label>
    </div>
    <div class="button">
      <div class="save" @click="saveClick">
        保存
      </div>
      <div class="delete" @click="deleteClick" v-if="!isNew">
        删除
      </div>
    </div>
  </div>
</template>

<script>
  import RAddressNavBar from "views/raddress/childComps/RAddressNavBar";

  export default {
    name: "RAddressChange",
    data() {
      return {
        index: null,
        isNew: false,
        address: {
          sex: 'man'
        }
      }
    },
    components: {
      RAddressNavBar
    },
    created() {
      this.index = this.$route.params.index
      if(this.index == -1) {
        this.isNew = true
      }
      else {
        this.isNew = false
        this.address = this.$store.state.profile.address[this.index]
      }
    },
    methods: {
      saveClick() {
        if (!this.isNew) {
          this.$store.commit('addressChange', {
            index: this.index,
            address: this.address
          })
        }
        else {
          this.$store.commit('addressAdd', this.address);
          console.log(this.$store.state.profile.address);
          this.$router.replace('/raddress')
        }
      },

      deleteClick() {
        this.$store.commit('addressDelete', this.index);
        this.$router.replace('/raddress')
      }
    }
  }
</script>

<style scoped>
  .address-change {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    z-index: 999;
    background-color: #FFFFFF;
  }


  .sex {
    padding: 10px 20px;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  /*input样式*/
  .base-address,
  .house-number,
  .name,
  .phone,
  .type {
    font-size: 14px;
    padding: 10px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .base-address input,
  .house-number input,
  .name input,
  .phone input {
    border: 0px;
  }
  .base-address input:focus,
  .house-number input:focus,
  .name input:focus,
  .phone input:focus {
    outline: none;
    width: 300px;
  }

  /*标签样式*/
  .type label {
    margin: 0px 5px;
  }

  /*标签单选框样式*/
  .type input {
    display: none;
  }
  .type input + span {
    display: inline-block;
    width: 40px;
    line-height: 20px;
    border-radius: 4px;
    background-color: #dddddd22;
    text-align: center;
    margin-right: 5px;
    font-size: 14px;
    border: 1px solid #ddd;
  }
  .type input:checked + span {
    color: #1aa1e4;
    border: 1px solid #1aa1e4;
    background-color: #1aa1e411;
  }


 /*作为按钮的div样式*/
  .save,
  .delete {
    text-align: center;
    width: 100px;
    height: 20px;
    margin: 1px 1px;
    text-align: center;
    width: 120px;
    height: 25px;
    margin: 15px 115px;
    padding-top: 2px;
  }

  .save {
    background-color: #ff5777;
    color: #FFFFFF;
    font-weight: bold;
    border-radius: 8px;
  }

  .delete {
    background-color: #F3F3F3;
    font-weight: bold;
    border-radius: 8px;
  }
</style>
