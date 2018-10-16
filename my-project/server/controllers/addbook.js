
const https = require('https')

// 豆瓣api 好像是挂了
// https://developers.douban.com/wiki/?title=api_v2
// 新增图书
// 1.获取豆瓣信息
// 2.入库
// https://api.douban.com/v2/book/isbn/9787121331565

module.exports = async (ctx) => {
    console.log(' 111112')
    const {isbn, openid} = ctx.request.body
    // 这里没成功的原因是因为不存在openid
    if (isbn && openid) {
        let url = 'https://api.douban.com/v2/book/isbn/' + isbn
        console.log(url)
        const bookinfo = await getJSON(url)
        const rate = bookinfo.rating.average
        const {title, image, alt, publisher, summary, price} = bookinfo
        const tags = bookinfo.tags.map(v => {
            return `${v.title} ${v.count}`
        }).join(',')
        const author = bookinfo.author.join(',')
        console.log({
            rate, title, image, alt, publisher, summary, price, tags, author
        })
        console.log(bookinfo)
        // tag: 玄幻 1000, 小说500
    }
    console.log(ctx.request.body)
}

function getJSON (url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let urlData = ''
            console.log(urlData)
            res.on('data', data => {
                urlData += data
            })
            res.on('end', data => {
                const bookinfo = JSON.parse(data)
                if (bookinfo.title) {
                    resolve(bookinfo)
                }
                reject(bookinfo)
            })
        })
    })
}
