module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/traffic-lights/'
  : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: ' @import "@/assets/main.scss"; '
      },
    },
  },
};
