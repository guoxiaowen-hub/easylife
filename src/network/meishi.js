import {request1} from "./request"

export function getMeishiDetail(shopid) {
  return request1({
    url: "/meishi/" + shopid,
  })
}
