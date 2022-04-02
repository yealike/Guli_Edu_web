import request from '@/utils/request'
const api_name = '/eduvod/video'

export default {

  getPlayAuth(id) {
    return request({
      url: `${api_name}/getPlayAuth/${id}`,
      method: 'get'
    })
  }

}
