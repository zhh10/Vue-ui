module.exports = {
  publicPath: '',
  chainWebpack: (config)=>{
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "ypa组件库"
        return args
      })
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@element': '@/components/element',
      },
    },
  },
};
