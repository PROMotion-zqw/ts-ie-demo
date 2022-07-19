const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.entry('main').add('babel-polyfill')
  },
})
