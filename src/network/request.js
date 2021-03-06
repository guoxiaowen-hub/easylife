import axios from "axios";

export function request(config){
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // instance.interceptors.request.use(config => {
  //   return config;
  // }, error =>{
  //   console.log(error);
  // });
  // instance.interceptors.response.use(res => {
  //   return res.data
  // }, err => {
  //   console.log(err);
  // });

  return instance(config)
}

export function request1(config){
  const instance = axios.create({
    baseURL: 'http://192.168.43.93:8080',
    // baseURL: 'http://172.21.7.69:8080',
    timeout: 5000
  })

  return instance(config)
}
