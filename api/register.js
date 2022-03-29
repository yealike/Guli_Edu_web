import request from "@/utils/request";

export default {
  // 根据邮箱发送验证码
  sendCode(email) {
    return request({
      url: `/edumail/mail/mail/${email}`,
      method: 'get'
    })
  },

  // 注册
  registerMember(params) {
    return request({
      url: `/educenter/member/register`,
      method: 'post',
      data: params
    })
  }
}
