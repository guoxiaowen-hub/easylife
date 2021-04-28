export default {
  login(state, profile) {
    if(profile.address == null) {
      profile.address = []
    }
    else {
      profile.address = JSON.parse(profile.address)
    }
    state.profile = profile
    state.Order = profile.order
    delete state.profile['order']
    state.Order[0].list.forEach(value => {
      value.orderTime = value.orderTime.replace("T"," ");
      if(value.orderType == 0) {
        value.menu = JSON.parse(value.menu)
      }
      if(value.orderType == 1) {
        value.address = JSON.parse(value.address)
      }
    })
    state.Order[1].list.forEach(value => {
      value.orderTime = value.orderTime.replace("T"," ");
      if(value.orderType == 0) {
        value.menu = JSON.parse(value.menu)
      }
      if(value.orderType == 1) {
        value.address = JSON.parse(value.address)
      }
    })
    state.Order[2].list.forEach(value => {
      value.orderTime = value.orderTime.replace("T"," ");
      if(value.orderType == 0) {
        value.menu = JSON.parse(value.menu)
      }
      if(value.orderType == 1) {
        value.address = JSON.parse(value.address)
      }
    })
    state.Order[3].list.forEach(value => {
      value.orderTime = value.orderTime.replace("T"," ");
      if(value.orderType == 0) {
        value.menu = JSON.parse(value.menu)
      }
      if(value.orderType == 1) {
        value.address = JSON.parse(value.address)
      }
    })
    state.Order[4].list.forEach(value => {
      value.orderTime = value.orderTime.replace("T"," ");
      if(value.orderType == 0) {
        value.menu = JSON.parse(value.menu)
      }
      if(value.orderType == 1) {
        value.address = JSON.parse(value.address)
      }
    })
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
    if(state.profile.addressIndex > index) {
      state.profile.addressIndex -= 1
    }
    state.profile.address.splice(index, 1)
  },

  AddressIndexChange(state, index) {
    state.profile.addressIndex = index
  },

  myOrderCurrentIndexChange(state, index) {
    state.myOrderCurrentIndex = index
  },

  CategoryCurrentIndexChange(state, index) {
    state.CategoryCurrentIndex = index
  },

  getOrder(state, order) {
    state.Order = order
    state.Order[0].list.forEach(value => {
      value.orderTime = value.orderTime.replace("T"," ");
      if(value.orderType == 0) {
        value.menu = JSON.parse(value.menu)
      }
      if(value.orderType == 1) {
        value.address = JSON.parse(value.address)
      }
    })
    state.Order[1].list.forEach(value => {
      value.orderTime = value.orderTime.replace("T"," ");
      if(value.orderType == 0) {
        value.menu = JSON.parse(value.menu)
      }
      if(value.orderType == 1) {
        value.address = JSON.parse(value.address)
      }
    })
    state.Order[2].list.forEach(value => {
      value.orderTime = value.orderTime.replace("T"," ");
      if(value.orderType == 0) {
        value.menu = JSON.parse(value.menu)
      }
      if(value.orderType == 1) {
        value.address = JSON.parse(value.address)
      }
    })
    state.Order[3].list.forEach(value => {
      value.orderTime = value.orderTime.replace("T"," ");
      if(value.orderType == 0) {
        value.menu = JSON.parse(value.menu)
      }
      if(value.orderType == 1) {
        value.address = JSON.parse(value.address)
      }
    })
    state.Order[4].list.forEach(value => {
      value.orderTime = value.orderTime.replace("T"," ");
      if(value.orderType == 0) {
        value.menu = JSON.parse(value.menu)
      }
      if(value.orderType == 1) {
        value.address = JSON.parse(value.address)
      }
    })
  },
}

