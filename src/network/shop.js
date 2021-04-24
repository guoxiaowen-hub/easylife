import {request} from "./request"

export function getShopGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page,
    }
  })
}
