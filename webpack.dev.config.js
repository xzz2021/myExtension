
const devconfig = {
    mode: 'development',
    devtool: 'cheap-source-map',
    devServer: {
        // contentBase: path.join(__dirname, 'xzz2022'),   // 告诉服务器从哪里提供内容(默认当前工作目录)
        // static: {
        //     directory: path.join(__dirname, 'xzz2022'), 
        //   },  // 告诉服务器从哪里提供内容(默认当前工作目录)
        host: 'localhost', // 默认localhost,想外部可访问用'0.0.0.0'
        port: 8888, // 默认8080
        // inline: true, // 可以监控js变化
        hot: false, // 热启动,,对注入的content无任何作用,所以关闭
        open: true, // 启动时自动打开浏览器（指定打开chrome，open: 'Google Chrome'）
        // open: {
        //   // app: {
        //   //   name: 'chrome',//启动后打开指定的宿主机应用,,,,---指定软件,浏览器
        //   // },
        //   // target: ['index.html', 'https://tmall.com'],//启动后打开指定页面
        // },
        compress: true, // 一切服务都启用gzip 压缩
        // allowedHosts: ["localhost.com"], //必须加上此行,不然webpack安全策略在非监听页面会一直报错
        allowedHosts: 'auto', //必须加上此行,不然webpack安全策略在非监听页面会一直报错-----------auto会自动引入所监听的url
        client: {
          reconnect: false,   //不会尝试重新连接///不然非监听页会一直报错
        },
        devMiddleware: {
          writeToDisk: true,
        },
        //  clientLogLevel: 'none',  // 不显示启动服务日志信息
        //  quite: true,   //控制台只显示基本信息
        //  before(app,server,compiler) {reloadServer(app,compiler)} //监听文件改动
        // stats: { // 设置控制台的提示信息
        //   chunks: false,
        //   children: false,
        //   modules: false,
        //   entrypoints: false, // 是否输出入口信息
        //   warnings: false,
        //   performance: false, // 是否输出webpack建议（如文件体积大小）
        // },
        // 侦听端口链接 执行自定义函数
        onListening: function (devServer) {
            if (!devServer) {
              throw new Error('webpack-dev-server is not defined');
            }
            console.log('--------侦听端口链接 执行自定义函数-----')
            // sendSSE()
            // const port = devServer.server.address().port;
            // console.log('Listening on port:', port);
          },
        // proxy: { // 本地地址和上线地址api不一致,则可以设置重写,接口代理（这段配置更推荐：写到package.json，再引入到这里）
        //   "/api-dev": {
        //     "target": "http://api.test.xxx.com",
        //     "secure": false,
        //     "changeOrigin": true,
        //     "pathRewrite": { // 将url上的某段重写（例如此处是将 api-dev 替换成了空）
        //       "^/api-dev": ""
        //     }
        //   }
        // }
      }
};

module.exports = devconfig
