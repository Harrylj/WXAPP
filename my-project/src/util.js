// 工具函数库

import config from './config'
// 获取登录消息--- 好像没用到了
export function get (url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}
// 显示消息提示框---api
export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}
