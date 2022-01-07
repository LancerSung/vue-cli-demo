/*
 * @Author: songyzh
 * @Date: 2022-01-05 14:35:36
 * @LastEditors: songyzh
 * @LastEditTime: 2022-01-07 10:31:16
 * @Description:
 */
const cdnOriginConf = require("./build/cdn");
const isProd = process.env.NODE_ENV === "production";
const cdnConf = isProd ? cdnOriginConf.prod : cdnOriginConf.dev;

module.exports = {
  publicPath: "./",
  configureWebpack: {
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].cdn = cdnConf;
      return args;
    });
  },
};
