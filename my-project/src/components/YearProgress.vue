<template>
 <div class="progressbar">
  <p>进度条123</p>
  <progress :percent="percent" activeColor="#EA5A49" active />
  <p>{{year}}已经过去了{{days}}天,{{percent}}%</p>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data () {
   return {

   }
 },
 methods: {
   // 是否是闰年 闰年是公历中的名词。
   // 普通年:能被4整除但不能被100整除的年份为普通闰年。（如2004年就是闰年，1999年不是闰年）；
   // 世纪年:能被400整除的为世纪闰年。（如2000年是闰年，1900年不是闰年）
   isLeapYear () {
    const year = new Date().getFullYear()
    if (year % 400 === 0 ){
      return true
    } else if (year % 4 === 0 && year % 100 !== 0) {
      return true
    } else {
      return false
    }
   },
   getDayOfYear () {
     return this.isLeapYear() ? 366 :365
   }
 },
 computed: {
   // 获取今年年份
   year () {
     return new Date().getFullYear()
   },
   // 获取今年过去的天数，这里技巧是今天减去今年的第一天得到过去的天数
   days () {
     let start = new Date()
     start.setMonth(0)
     start.setDate(1)
     // start就是今年第一天
     // 今天的时间戳，减去今年第一天的时间戳
     let offset = new Date().getTime() - start.getTime()
     return parseInt(offset/1000/60/60/24)+1
   },
   // 百分比
   percent () {
     // 小数点前保留一位
     return (this.days * 100 / this.getDayOfYear()).toFixed(1)
   }
 },
 components: {

 }
}
</script>

<style lang="scss">
.progressbar{
  text-align: center;
  margin-top: 10px;
  margin-bottom: 40px;
  width: 100%;
  progress{
    margin: 10px 0;
  }
}
</style>
