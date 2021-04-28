import { createStore } from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";

const state = {
  Order: [
    {
      list: []
    },
    {
      list: []
    },
    {
      list: []
    },
    {
      list: []
    },
    {
      list: []
    },
  ],
  profile: {},
  myOrderCurrentIndex: 0,
  CategoryCurrentIndex: 0,
  orderId: 0
}

export default createStore({
  state,
  mutations,
  actions,
  modules: {
  }
})
