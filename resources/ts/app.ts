// Libs
import Vue, { CreateElement } from "vue";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";

// Load vue plugins
Vue.use(VueI18n);
Vue.use(VueRouter);

// Index component
import IndexComponent from "./components/index.component.vue";

// Router
import { router } from "./router";

// Locale
import { i18n } from "./locale";

export default new Vue({
  el: "#app",
  render: (h: CreateElement) => h(IndexComponent),
  router,
  i18n,
});