/**
 * app.js
 */

import './bootstrap';
import router from './routes';

// Vue.component('router-view', require('./views/Home.vue').default);

new Vue({
  el: '#app',

  router: router
});
