import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import About from "./views/AboutMeView.vue";
import Projects from "./views/ProjectsView.vue";
import HomeView from "./views/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
