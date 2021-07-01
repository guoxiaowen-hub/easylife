import {request1} from "./request"

export function subComment(data) {
  return request1({
    url: "/subcomment",
    params: {
      userId: data.userId,
      userName: data.userName,
      orderId: data.orderId,
      goodsId: data.goodsId,
      goodsImg: encodeURIComponent(data.goodsImg),
      goodsName: encodeURIComponent(data.goodsName),
      goodsContent: encodeURIComponent(data.goodsContent),
      shopId: data.shopId,
      shopLogo: encodeURIComponent(data.shopLogo),
      shopName: encodeURIComponent(data.shopName),
      shopContent: encodeURIComponent(data.shopContent)
    }
  })
}

export class goodsInfo {
  constructor(orderInfo) {
    this.goodsId = orderInfo.goodsId
    this.goodsImg = orderInfo.goodsImg
    this.goodsName = orderInfo.goodsName
  }
}

export class shopInfo {
  constructor(orderInfo) {
    this.shopId = orderInfo.shopId
    this.shopLogo = orderInfo.shopLogo
    this.shopName = orderInfo.shopName
  }
}
