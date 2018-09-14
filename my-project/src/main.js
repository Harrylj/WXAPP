import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const app = new Vue(App)
app.$mount()

export default{
  config:{
    "window":{
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#ea5149",
      "navigationBarTitleText": "青城图书",
      "navigationBarTextStyle": "light"
    }
  }
}