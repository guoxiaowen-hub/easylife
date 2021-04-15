import {request} from "./request";

export  function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class GoodsInfo {
  constructor(itemInfo, colums, servies) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.colunms = colums
    this.services = servies
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.Goods = shopInfo.cGoods
  }
}