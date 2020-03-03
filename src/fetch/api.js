import {Post, Get} from './axios.js'

/* ----------------首页接口------------------- */

/**
 * @param 上传分数
 */
export const InsertUser = (param) => {
  return Post('/user/insertUser', param)
}

/**
 * @param 请求分数
 */
export const GetPoint = (param) => {
  return Get('/user/getPoint', param)
}
