import { createStore } from 'vuex'

const state = {
  cheatOrder: [
    {
      state: 0,
      list: [
        {
          shopLogo: "//s3.mogucdn.com/mlcdn/c45406/180616_08024j2g76l4552k5550fi73k5f3f_200x200.jpg",
          shopName: "芜湖",
          state: 1,
          price: 2.0,
          goodsImg: "//s11.mogucdn.com/mlcdn/c45406/180811_6919ke30l4jf6i886c6d2i04197ea_640x960.jpg",
          goodsName: '1+1套餐',
          orderId: 0,
          orderTime: '2020-10-10 21:30',
          orderType: 3
        },
        {
          shopLogo: "//s3.mogucdn.com/mlcdn/c45406/180616_08024j2g76l4552k5550fi73k5f3f_200x200.jpg",
          shopName: "哈哈",
          state: 2,
          price: 3.0,
          goodsImg: "//s11.mogucdn.com/mlcdn/c45406/180811_6919ke30l4jf6i886c6d2i04197ea_640x960.jpg",
          goodsName: '憨批汉堡',
          orderId: 1,
          orderTime: '2021-02-10 21:30',
          orderType: 0
        }
      ]
    },
    {
      type: 1,
      list: [
        {
          shopLogo: "//s3.mogucdn.com/mlcdn/c45406/180616_08024j2g76l4552k5550fi73k5f3f_200x200.jpg",
          shopName: "芜湖",
          state: 1,
          price: 2.0,
          goodsImg: "//s11.mogucdn.com/mlcdn/c45406/180811_6919ke30l4jf6i886c6d2i04197ea_640x960.jpg",
          goodsName: '1+1套餐',
          orderId: 0,
          orderTime: '2020-10-10 21:30',
          orderType: 0
        },
        {
          shopLogo: "//s3.mogucdn.com/mlcdn/c45406/180616_08024j2g76l4552k5550fi73k5f3f_200x200.jpg",
          shopName: "哈哈",
          state: 2,
          price: 3.0,
          goodsImg: "//s11.mogucdn.com/mlcdn/c45406/180811_6919ke30l4jf6i886c6d2i04197ea_640x960.jpg",
          goodsName: '憨批汉堡',
          orderId: 1,
          orderTime: '2021-02-10 21:30',
          orderType: 0
        }
      ]
    },
    {
      type: 2,
      list: []
    },
    {
      type: 3,
      list: [
        {
          shopLogo: "//s3.mogucdn.com/mlcdn/c45406/180616_08024j2g76l4552k5550fi73k5f3f_200x200.jpg",
          shopName: "芜湖",
          state: 0,
          price: 2.0,
          goodsImg: "//s11.mogucdn.com/mlcdn/c45406/180811_6919ke30l4jf6i886c6d2i04197ea_640x960.jpg",
          goodsName: '1+1套餐',
          orderId: 0,
          orderTime: '2020-10-10 21:30',
          orderType: 2
        }
      ]
    },
  ],
  profile: {
    myImg: "//s5.mogucdn.com/mlcdn/c45406/180504_89k56fgelh14g4fc13j8jbh6ha909_200x200.jpg",
    myId: 0,
    myName: "狗子",
    birthday: '1997-11-30',
    nAddress: {
      address: '集美大学第五社区',
      houseNumber: '409',
      name: '郭',
      sex: 'man',
      phone: '18120767752',
      type: '学校'
    },
    address: [
      {
        address: '集美大学第五社区',
        houseNumber: '409',
        name: '郭',
        sex: 'man',
        phone: '18120767752',
        type: '学校'
      },
      {
        address: '地球芜湖国芜湖市',
        houseNumber: '芜湖村',
        name: '芜湖',
        sex: 'man',
        phone: '103030303030',
        type: '家'
      },
    ]
  }
}

export default createStore({
  state,
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
