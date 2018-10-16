<template>
  <div class="container">
    1个人中心页面123456321221
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">获取用户信息</button>
    <div class="userinfo">
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.openId}}</p>
      <p>{{userinfo.nickName}} + 你好</p>
      <p>{{abc}}</p>
    </div>
    <YearProgress></YearProgress>
    <button v-if="userinfo.openId" @click='scanBook' class="btn">添加图书</button>
  </div>
</template>

<script type="text/ecmascript-6">
import {showSuccess, post} from '../../util'
import qcloud from 'wafer2-client-sdk'
import config from '../../config'
// import YearProgress from '../../components/YearProgress'
// @表示src目录
import YearProgress from '@/components/YearProgress'
export default {
  data () {
   return {
     userinfo: {
       avatarUrl: '../../../static/img/me.png',
       nickName: '点击登录'
     },
     abc: '123'
   }
  },
  created () {
  },
  mounted () {
    // 这里为什么不可以再点击后就立马显示获取的资料啊？？要重新加载才可以---通过储存this解决
    if(wx.getStorageSync('userinfo')){
      this.userinfo = wx.getStorageSync('userinfo')
    }
    console.log(this.userinfo,this.abc)
  },
  methods: {
    addBook(isbn) {
      // https://api.douban.com/v2/book/isbn/9787121331565
      console.log(isbn)
      // const res = await post('/weapp/addbook', {
      const res = post('/weapp/addbook', {
        isbn,
        openid: this.userinfo.openid
      })
      console.log(res)
      if(res.code == 0 && res.data.title){
        showSuccess('添加成功',`${res.data.title}添加成功`)
      }
    },
    getabc () {
      console.log('last time')
    },
    // 扫码
    scanBook () {
      wx.scanCode({
        success: (res) => {
          if(res.result) {
            this.addBook(res.result)
          }
          console.log(res, res.result)
        }
      })
    },
    // 点击登录
    doLogin: function (e) {
      this.abc = '正在登陆请稍后hahahahh'
      // console.log('1')
      let user = wx.getStorageSync('userinfo')
      // 未登录
      if (!user) {
        var aaa = this
        // 设置登录地址
        qcloud.setLoginUrl(config.loginUrl)
        // 这里回调函数里无法设置消息--以至于没有办法第一事件更新数据---可以通过储存this的方法达到数据的更替,还可以使用箭头函数的方法
        qcloud.login({
          success: function (userin) {
            console.log('登录成功', userin)
            qcloud.request({
              url:config.userUrl,
              login:true,
              success(userRes) {
                console.log(userRes)
                // 弹窗提示
                showSuccess('登录成功')
                // 设置存储信息
                wx.setStorageSync('userinfo', userin)
                // 通过暂存this的方法改变属性值
                aaa.userinfo = wx.getStorageSync('userinfo')
              },
              fail(err) {
                showSuccess('登录失败2')
              }
            })
            /*
            // 弹窗提示
            showSuccess('登录成功')
            // 设置存储信息
            wx.setStorageSync('userinfo', userin)
            // 通过暂存this的方法改变属性值
            aaa.userinfo = wx.getStorageSync('userinfo')
            */
          },
          fail: function (err) {
            aaa.abc = "登录失败1"
            showSuccess('登录失败1')
            console.log('登录失败1', err)
          }
        })
      }
      // 已登录
      else {
        this.abc = '别重复登录'
        this.userinfo = wx.getStorageSync('userinfo')
        console.log(this.userinfo)
        console.log('不用重复登录')
      }
    }
  },
 components: {
   YearProgress
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
