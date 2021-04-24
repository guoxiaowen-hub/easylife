module.exports = {
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
