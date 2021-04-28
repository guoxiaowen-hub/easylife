import {request1} from "./request"

export function getProfile(user) {
  return request1({
    url: '/login',
    params: {
      user: user.user,
      password: user.password,
    }
  })
}

export function updateProfile(user) {
  return request1({
    url: '/userupdate',
    params: {
      userId: user.myId,
      userName: user.myName,
      birthday: user.birthday,
      addressIndex: user.addressIndex,
      address: encodeURIComponent(user.address),
    }
  })
}

export function subOrder(order) {
  return request1({
    url: '/suborder',
    params: {
      userId: order.userId,
      goodsId: order.goodsId,
      goodsImg: encodeURIComponent(order.goodsImg),
      goodsName: encodeURIComponent(order.goodsName),
      menu: encodeURIComponent(order.menu),
      num: order.num,
      orderState: order.orderState,
      orderType: order.orderType,
      price: order.price,
      shopId: order.shopId,
      shopLogo: encodeURIComponent(order.shopLogo),
      shopName: encodeURIComponent(order.shopName),
      total: order.total,
      address: encodeURIComponent(order.address),
    }
  })
}

export function orderStateChange(info) {
  return request1({
    url: '/orderstatechange',
    params: {
      userId: info.userId,
      orderId: info.orderId,
    }
  })
}
