module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ubike-practice/'
    : '/',
  devServer: {
    port: 7000,
  },
  configureWebpack: {
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[name].[chunkhash].js',
    },
    resolve: {
      alias: {
        '@as': '@/assets',
        '@c': '@/components',
        '@v': '@/views',
        '@img': '@/assets/img',
        '@css': '@/assets/css',
      },
    },
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@css/mixins.scss";',
      },
    },
  },

}
