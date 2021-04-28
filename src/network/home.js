import {request,request1} from "./request"

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  })
}

export function getHomeMeishi(page) {
  return request1({
    url: "/home/dealList/"+ page,
  })
}
