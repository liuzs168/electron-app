import request from '@utils/request'

// 登录
export const loginByJson = (data: any) => {
  return request({
    url: '/u/loginByJson',
    method: 'post',
    data
  })
}
