<template>
  <div class="container">
    个人中心页面123456
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">获取用户信息</button>
    <div class="userinfo">
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>
    <button @click='scanBook' class="btn">添加图书</button>
  </div>
</template>

<script type="text/ecmascript-6">
import {showSuccess} from '../../util'
import qcloud from 'wafer2-client-sdk'
import config from '../../config'

export default {
  data () {
   return {
     userinfo: {}
   }
  },
  created () {
  //  this.userinfo = wx.getStorageSync('userinfo')
  //  console.log(userinfo)
  },
  mounted () {
    this.userinfo = wx.getStorageSync('userinfo')
    console.log(this.userinfo)
  },
  methods: {
    // 扫码
    scanBook () {
      wx.scanCode({
        success: (res) => {
          console.log(res)
        }
      })
    },
    // 点击登录
    doLogin: function (e) {
      let user = wx.getStorageSync('userinfo')
      // 未登录
      if (!user) {
        // 设置登录地址
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: function (userinfo) {
            console.log('登录成功', userinfo)
            showSuccess('登录成功')
            // 设置存储信息
            wx.setStorageSync('userinfo', userinfo)
          },
          fail: function (err) {
            console.log('登录失败', err)
          }
        })
      }
      // 已登录
      else {
        console.log('不用重复登录')
      }
      
    }
  },
 components: {
   
 }
}
</script>

<style lang="scss">
.container{
  padding: 0 30rpx;
  .userinfo{
    margin-top: 100px;
    text-align: center;
    img{
      width: 128rpx;
      height: 128rpx;
      margin: 20rpx;
      border-radius: 50%;
    }
  }
}
</style>
