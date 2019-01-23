/**
 * main.js
 */

/*
Component
 */
Vue.component('progress-view', {
  data() {
    return {
      completionRate: '50%'
    }
  }
});

/*
App
 */
var app = new Vue({
  el: "#root",
});
