import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import AboutMeView from '../views/AboutMeView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectsView },
  { path: '/about', component: AboutMeView },
  { path: '/refresh', component: HomeView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
