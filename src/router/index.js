import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import AboutMeView from '../views/AboutMeView.vue';
import ContactView from '../views/ContactView.vue';
import ResumeView from '../views/ResumeView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectsView },
  { path: '/about', component: AboutMeView },
  { path: '/contact', component: ContactView },
  { path: '/refresh', component: HomeView },
  { path: '/resume', component: ResumeView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
