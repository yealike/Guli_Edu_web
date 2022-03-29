import request from "@/utils/request";

export default {
  // 用户登录
  userLogin(userInfo) {
    return request({
      url: `/educenter/member/login`,
      method: 'post',
      data: userInfo
    })
  },
  // 根据token获取用户信息
  getUserInfoByToken(userInfo) {
    return request({
      url: `/educenter/member/getMemberInfo`,
      method: 'get'
    })
  }
}
