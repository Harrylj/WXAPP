
<script>
import {get} from './util'
import qcloud from 'wafer2-client-sdk'
import config from './config'

export default {
  /*
  methods: {
    doLogin: function (e) {
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: function (userInfo) {
            console.log('登录成功', userInfo)
          },
          fail: function (err) {
            console.log('登录失败', err)
          }
        })
    }
  },
  */
  async created () {
    console.log('小程序启动了')
    /*
    // 设置登录地址
    qcloud.setLoginUrl(config.loginUrl);
    qcloud.login({
        success: function (userInfo) {
            console.log('登录成功', userInfo);
        },
        fail: function (err) {
            console.log('登录失败', err);
        }
    });
    */

    /* 
    // 调用 util.js
    const res = await get('/weapp/demo')
    console.log(123,res)
    */
    /*
    // 封装到util.js里
    wx.request({
      url:config.host + '/weapp/demo',
      success:function(res) {
        console.log(res)
      }
    })
    */
    
    // 调用API从本地缓存中获取数据
    /*
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
    */
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.btn{
  color:white;
  background: #ea5a49;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 100%;
}
.btn:active{
  background: #fa5449;
}
</style>
