import { createApp } from 'vue';
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
import router from './router/index.js';

library.add(faGithub, faLinkedin, faTwitter, faDribbble, faInstagram, faGlobe);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
