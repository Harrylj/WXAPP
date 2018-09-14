const Koa = require('koa')
const koaLog = require('./koa-logger')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.get('/',(ctx,next) => {
  ctx.body = '齐天大圣孙悟空'
})
router.get('/zhubajie', (ctx, next) => {
  ctx.body = '猪八戒'
})

function delay(word) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove('hello' + word)
    }, 1000)
  })
}
app.use(koaLog)
app.use(router.routes())
  .use(router.allowedMethods())
// app.use(async(ctx, next) => {
//   console.log(ctx)
//   if(ctx.request.url == '/'){
//     ctx.body = '齐天大圣孙悟空'
//   } else if(ctx.request.url == '/zhubajie'){
//     ctx.body = '猪八戒'
//   } else{
//     ctx.body = '<h1>404 not found</h1>'
//   }
//   await next()
//   ctx.body += '2'
// })

// app.use(async(ctx, next) => {
//   ctx.body += '3'
//   await delay()
//   await next()
//   ctx.body += '4'
// })

// app.use(async(ctx, next) => {
//   ctx.body += '5'
//   await delay()
//   await next()
//   ctx.body += '6'
// })
/*
app.use(async(ctx) =>{
  ctx.body = 'hello koa11111'
})
*/
app.listen('3000')









