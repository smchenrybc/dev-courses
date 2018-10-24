/**
 * index.js
 */

// global
Vue.component('task-list', {
  template: '<ul><slot></slot></ul>'
});

// global
Vue.component('task', {
  template: '<li><slot></slot></li>',
  data() {
    return {
      message: ""
    }
  }
});

var app = new Vue({
  el: "#root"
});
