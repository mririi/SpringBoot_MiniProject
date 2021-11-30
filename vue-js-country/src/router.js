import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/countries",
      name: "countries",
      component: () => import("./components/CountriesList")
    },
    {
      path: "/countries/:id",
      name: "country-details",
      component: () => import("./components/Country")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddCountry")
    }
  ]
});