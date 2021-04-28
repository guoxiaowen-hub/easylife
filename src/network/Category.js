import {request, request1} from "./request"

export function getCategoryGoods(page) {
  return request({
    url: "/home/data",
    params: {
      type: 'pop',
      page,
    }
  })
}

export function getCategoryMeishi(page) {
  return request1({
    url: "/category/meishi/"+page,
  })
}
