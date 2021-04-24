import {request} from "./request"

export function getCategoryGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page,
    }
  })
}


