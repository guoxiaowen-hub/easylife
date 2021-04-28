import {request1} from "./request"

export function signIn(userInfo) {
  console.log(userInfo);
  return request1({
    url: '/signin',
    params: {
      user: userInfo.user,
      password: userInfo.password,
      name: userInfo.name
    }
  })
}
