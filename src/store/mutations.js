export default {
  login(state, profile) {
    state.profile = profile
  },

  nameChange(state, name) {
    state.profile.myName = name
  },

  birthdayChange(state, birthday) {
    state.profile.birthday = birthday
  },

  addressChange(state, data) {
    state.profile.address[data.index] = data.address
  },

  addressAdd(state, address) {
    state.profile.address.push(address)
  },

  addressDelete(state, index) {
    state.profile.address.splice(index, 1)
  },

  AddressIndexChange(state, index) {
    state.profile.addressIndex = index
  },

  myOrderCurrentIndexChange(state, index) {
    state.myOrderCurrentIndex = index
  },




//  提交订单 模拟
  subOrder(state, order) {
    order['orderTime'] = '2021-4-20 22:05';
    order['orderState'] = 1;
    order['address'] = state.profile.address[state.profile.addressIndex]
    order['orderId'] = state.orderId;
    state.orderId++;
    state.Order[0].list.push(order);
    state.Order[1].list.push(order);
  },

  orderStateChange(state, data) {
    let order = state.Order[data.orderState].list[data.orderIndex]
    state.Order[data.orderState].list.splice(data.orderIndex, 1)
    order.orderState += 1
    state.Order[data.orderState + 1].list.push(order)
    state.myOrderCurrentIndex = order.orderState
  }
}

