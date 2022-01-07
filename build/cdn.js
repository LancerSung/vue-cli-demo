/*
 * @Author: songyzh
 * @Date: 2022-01-06 15:22:11
 * @LastEditors: songyzh
 * @LastEditTime: 2022-01-07 10:30:47
 * @Description:
 */
const cdn = {
  dev: {
    css: [],
    js: [],
  },
  prod: {
    css: [],
    js: [
      "https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js",
      "https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js",
      "https://cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.min.js",
    ],
  },
};
module.exports = cdn;
