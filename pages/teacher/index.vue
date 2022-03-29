<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- 讲师列表 开始 -->
    <section class="container">
      <header class="comm-title all-teacher-title">
        <h2 class="fl tac">
          <span class="c-333">全部讲师</span>
        </h2>
        <section class="c-tab-title">
          <a id="subjectAll" title="全部" href="#">全部</a>
        </section>
      </header>
      <section class="c-sort-box unBr">
        <div>

          <!-- /无数据提示 开始-->
          <section v-if="data.total===0" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article v-if="data.total > 0" class="i-teacher-list">
            <ul class="of">

              <!--讲师数据-->
              <li v-for="teacher in data.teacherList" :key="teacher.id">
                <section class="i-teach-wrap">
                  <div class="i-teach-pic">
                    <a :href="'/teacher/'+teacher.id" :title="teacher.name">
                      <img :src="teacher.avatar" :alt="teacher.name" height="142">
                    </a>
                  </div>
                  <div class="mt10 hLh30 txtOf tac">
                    <a :href="'/teacher/'+teacher.id" :title="teacher.name" class="fsize18 c-666">{{ teacher.name }}</a>
                  </div>
                  <div class="hLh30 txtOf tac">
                    <span class="fsize14 c-999">{{ teacher.career }}</span>
                  </div>
                  <div class="mt15 i-q-txt">
                    <p class="c-999 f-fA">{{ teacher.intro }}</p>
                  </div>
                </section>
              </li>

            </ul>
            <div class="clear"/>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div>
            <div class="paging">
              <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
              <a
                :class="{undisable: !data.previous}"
                href="#"
                title="首页"
                @click.prevent="gotoPage(1)">首页</a>
              <a
                :class="{undisable: !data.previous}"
                href="#"
                title="前一页"
                @click.prevent="gotoPage(data.current-1)">&lt;</a>
              <a
                v-for="page in data.pages"
                :key="page"
                :class="{current: data.current === page, undisable: data.current === page}"
                :title="'第'+page+'页'"
                href="#"
                @click.prevent="gotoPage(page)">{{ page }}</a>
              <a
                :class="{undisable: !data.hasNext}"
                href="#"
                title="后一页"
                @click.prevent="gotoPage(data.current+1)">&gt;</a>
              <a
                :class="{undisable: !data.hasNext}"
                href="#"
                title="末页"
                @click.prevent="gotoPage(data.pages)">末页</a>
              <div class="clear"/>
            </div>
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /讲师列表 结束 -->
  </div>
</template>
<script>
import teacherApi from '@/api/teacher'
//
export default {
  // data() {
  //   return {
  //     pageInfo: {
  //       hasNext: false,
  //       hasPrevious: false,
  //       total: 0,
  //       current: '',
  //       pages: '',
  //       size: '',
  //
  //     },
  //     teacherList: ''
  //
  //   }
  // },
  /**
   * 异步调用,只会调用一次
   * @param params 调用参数 相当于 this.$route.params.id
   * @param error 调用产生的错误信息
   */
  asyncData({params, error}) {
    return teacherApi.getTeacherList(1, 8)
      .then(resp => {
        // this.teacherList = resp.data.data.teacherList
        // console.log('resp.data.data.teacherList==>',resp.data.data.teacherList)
        return {data: resp.data.data}
      })
  },
  methods: {
    // 分页切换方法
    // 参数 页码数
    gotoPage(page) {
      teacherApi.getTeacherList(page, 8)
        .then(resp => {
          this.data = resp.data.data
        })
    }
  }
  //   created() {
  //   this.getTeachers()
  // },
  // methods:{
  //   getTeachers(){
  //     teacherApi.getTeacherList(1,8)
  //       .then(resp=>{
  //         console.log('resp.data.data===>',resp.data.data)
  //       })
  //   }
  // }

}
</script>
