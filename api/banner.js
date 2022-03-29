import request from "@/utils/request";

const banner_api = '/educms/bannerfront'
export default {
  //查询前两条banner数据
  getListBanner() {
    return request({
      url: `${banner_api}/getAllBanner`,
      method: 'get'
    })
  }
}
