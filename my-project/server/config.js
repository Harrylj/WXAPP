const CONF = {
    // 其他配置 ...
    // serverHost: 'localhost',
    serverHost: 'localhost',
    tunnelServerUrl: '',
    tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
    // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.cloud.tencent.com/capi
    qcloudAppId: '1253934974',
    qcloudSecretId: 'AKID8B3jCUfO63slV2RWTDn8wclT4A9ysBxa',
    qcloudSecretKey: 'MbgmV5TNuJWbVGMMEMNGxSrqeihZHrbC',
    wxMessageToken: 'weixinmsgtoken',
    networkTimeout: 30000,

    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wx22bb860c9e32af47',

    // 微信小程序 App Secret
    appSecret: '',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    // create database cAuth
    mysql: {
        host: 'localhost',
        // host: '192.168.31.129',
        // host: '171.214.211.87',
        port: 3306,
        user: 'root',
        // 这里我新建了一个test并授权也没什么用
        // user: 'test',
        db: 'cAuth',
        pass: '123456',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
