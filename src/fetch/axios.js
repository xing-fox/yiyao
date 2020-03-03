import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 50000

axios.defaults.baseURL = 'http://129.211.22.72:8008/'
axios.defaults.withCredentials = false

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  console.log(error.respose)
})

export function Post (url, params, headers) {
  params = headers ? params : qs.stringify(params)
  return new Promise((resolve, reject) => {
    axios.post(url, params, {
      headers: {
        'Content-Type': headers || 'application/x-www-form-urlencoded;text/html;charset=utf-8'
      }
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function Get (url, param, headers) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      headers: {
        'Content-Type': headers || 'application/x-www-form-urlencoded;text/html;charset=utf-8'
      },
      params: param
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}
