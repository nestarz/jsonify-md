import Vue from "/web_modules/vue/dist/vue.esm.browser.js";
import VueRouter from "/web_modules/vue-router/dist/vue-router.esm.browser.js";
import httpVueLoader from "/web_modules/http-vue-loader/src/httpVueLoader.js";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: httpVueLoader("./src/pages/home.vue") },
];

new Vue({
  router: new VueRouter({ routes }),
  template: "<router-view></router-view>"
}).$mount("#app");