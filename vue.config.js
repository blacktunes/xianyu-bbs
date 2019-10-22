module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  configureWebpack: {
    // 关闭 webpack 的性能提示
    performance: {
      hints: false
    }
  },
  productionSourceMap: false
}
