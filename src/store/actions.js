import {getProfile, updateProfile, subOrder, orderStateChange} from "@/network/actions";

export default {
  login(context, user) {
    return new Promise(resolve => {
      getProfile(user).then(res => {
        context.commit('login', res.data)
        resolve()
      })
    })
  },

  update(context, userInfo) {
    return new Promise(resolve => {
      if(userInfo.name) {
        context.commit('nameChange', userInfo.name)
      }
      if(userInfo.birthday) {
        context.commit('birthdayChange', userInfo.birthday);
      }
      if(userInfo.addressIndex === 0) {
        context.commit('AddressIndexChange', userInfo.addressIndex);
      }
      if(userInfo.addressIndex) {
        context.commit('AddressIndexChange', userInfo.addressIndex);
      }
      if(userInfo.address) {
        if(userInfo.index) {
          context.commit('addressChange', {
            index: userInfo.index,
            address: userInfo.address,
          });
        }
        else {
          context.commit('addressAdd', userInfo.address);
        }
      }
      if(userInfo.index) {
        if(!userInfo.address) {
          context.commit('addressDelete', userInfo.index);
        }
      }

      let oaddress = [...context.state.profile.address]
      let naddress = JSON.stringify(oaddress)
      let profile = JSON.parse(JSON.stringify(context.state.profile));
      profile.address = naddress

      updateProfile(profile).then(res => {
        resolve()
      })
    })
  },


  subOrder(context, order) {
    return new Promise(resolve => {
      order['userId'] = context.state.profile.myId
      order['orderState'] = 1;
      if(order.orderType == 1) {
        order['address'] = context.state.profile.address[context.state.profile.addressIndex]
        order.address = JSON.stringify(order.address)
        order.menu = null;
      }
      else if(order.orderType == 0) {
        order['address'] = null
      }
      subOrder(order).then(res => {
        context.commit("myOrderCurrentIndexChange", 1)
        context.commit("getOrder", res.data)
        resolve()
      });
    })
  },

  orderStateChange(context, orderId) {
    return new Promise(resolve => {
      orderStateChange({
        userId: context.state.profile.myId,
        orderId
      }).then(res => {
        context.commit("myOrderCurrentIndexChange", context.state.myOrderCurrentIndex+1)
        context.commit("getOrder", res.data)
        resolve()
      })
    })
  }
}
