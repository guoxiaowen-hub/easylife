import {request1} from "./request"

export function getMeishiDetail(shopid) {
  return request1({
    url: "/meishi/" + shopid,
  })
}

export function getMeishiComment(Id) {
  return request1({
    url: '/getcomment',
    params: {
      type: 'shop',
      Id,
    }
  })
}
