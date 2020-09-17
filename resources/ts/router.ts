// Libs
import VueRouter from "vue-router";

// Components
import ListingComponent from "./components/listing.component.vue";
import CreateComponent from "./components/create.component.vue";

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "show", component: ListingComponent },
    { path: "/create", name: "create", component: CreateComponent },
  ]
});