import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faDribbble,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import './style.css';
import App from './App.vue';
import About from './views/AboutMeView.vue';
import Projects from './views/ProjectsView.vue';
import HomeView from './views/HomeView.vue';
import ContactView from './views/ContactView.vue';
import ResumeView from './views/ResumeView.vue';

library.add(faGithub, faLinkedin, faTwitter, faDribbble, faInstagram, faGlobe);

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: ContactView },
  { path: '/resume', component: ResumeView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
