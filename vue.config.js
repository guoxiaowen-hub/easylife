module.exports = {

  publicPath: './',//打包后的位置(如果不设置这个静态资源会报404)
  outputDir: '../easylifeApp/www',//打包后的目录名称
  assetsDir: 'static',//静态资源目录名称

  configureWebpack: {

    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {// 环境配置
    open: false, //配置自动启动浏览器
    port: 8081
  },
}
