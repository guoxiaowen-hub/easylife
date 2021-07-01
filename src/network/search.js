import {request,request1} from "./request"

export function Search(content) {
  return request1({
    url: "/search",
    params: {
      content: encodeURIComponent(content)
    }
  })
}
