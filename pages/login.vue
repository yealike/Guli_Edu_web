<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <el-form ref="userForm" :model="user" :rules="rules">
        <!--邮箱-->
        <el-form-item class="input-prepend restyle" prop="email">
          <el-input type="text" v-model="user.email" auto-complete="false" placeholder="邮箱"/>
          <i class="iconfont icon-yonghu"></i>
        </el-form-item>

        <!--密码-->
        <el-form-item class="input-prepend " prop="password">
          <el-input type="text" v-model="user.password" auto-complete="false" placeholder="密码"/>
          <i class="iconfont icon-phone"></i>
        </el-form-item>

        <!--登录-->
        <el-form-item class="btn">
          <el-button type="submit" class="sign-in-button" @click="submitLogin">登录</el-button>
        </el-form-item>

      </el-form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>社交帐号登录</h6>
        <ul>
          <li><a id="weixin" class="weixin" target="_blank" href="http://localhost:8005/api/ucenter/wx/login"><i
            class="iconfont icon-weixin"/></a></li>
          <li><a id="qq" class="qq" target="_blank" href="#"><i class="iconfont icon-qq"/></a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import '~/assets/css/sign.css'
import '~/assets/iconfont/iconfont.css'
import cookie from 'js-cookie'
import loginApi from '@/api/login'

export default {
  layout: 'sign',
  data() {
    return {
      // 封装邮箱和密码
      user: {
        email: '',
        password: ''
      },
      // 用户信息
      loginInfo: {
        id:'',
        nickName: '',
        avatar: '',
        email:''
      },
      rules: {
        email: [{required: true, message: '请输入邮箱', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }

    }
  },
  methods: {
    // 登录的方法
    submitLogin() {
      // 1.调用接口进行登录，返回token字符串
      loginApi.userLogin(this.user)
        .then(resp => {
          // 获2.取token字符串放到cookie里面
          // 参数1：cookie名称   参数2：token值  参数3：作用范围
          cookie.set('guli_token', resp.data.data.token, {domain: 'localhost'})

          // 4.调用接口根据token获取用户信息，为了首页面显示
          loginApi.getUserInfoByToken()
            .then(resp => {
              this.loginInfo = resp.data.data.userInfo
              let s = JSON.stringify(this.loginInfo);
              // 返回用户信息，放到cookie里面
              cookie.set('guli_ucenter', s, {domain: 'localhost'})
            })
          // 跳转页面回到首页
          this.$router.push({path: '/'})
        })
    }
  }


}
</script>
