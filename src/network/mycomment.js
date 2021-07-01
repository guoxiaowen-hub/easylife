import {request1} from "./request"

export function getComment(Id) {
  return request1({
    url: '/getcomment',
    params: {
      type: 'my',
      Id,
    }
  })
}
