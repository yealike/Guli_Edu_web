import request from "@/utils/request";

export default {
  // 分页查询讲师方法
  getTeacherList(page,limit) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  // 讲师详情的方法
  getTeacherInfo(id){
    return request({
      url: `/eduservice/teacherfront/getTeacherInfo/${id}`,
      method: 'get'
    })
  }
}
