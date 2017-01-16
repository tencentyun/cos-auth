# cos-auth
一个简单的cos鉴权server
# 使用步骤
1. 填写config文件，设置签名所需参数，可以在[COS控制台密钥管理获取](https://console.qcloud.com/cos4/secret)。

2. 将server.js，config.js 上传至你的服务器目录下。

3. 执行`node server.js`，建议配合pm2, forever, supervisor等模块方便后台运行管理。

4. 访问服务器ip:端口号，即可获取签名，建议配置域名解析和nginx反向代理后使用。

## 相关

* [WeCOS-UGC-DEMO](https://github.com/tencentyun/wecos-ugc-upload-demo)——小程序用户资源上传COS DEMO

* [WeCOS](https://github.com/tencentyun/wecos-ugc-upload-demo)——小程序COS瘦身方案，解决官方1MB限制的烦恼
