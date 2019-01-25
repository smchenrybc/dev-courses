/**
 * app.js
 */

import Vue from 'vue';

let store = {
  user: {
    name: 'John Doe'
  }
}

new Vue ({
  el: '#one',

  data: {
    foo: 'bar',
    shared: store
  }
});

new Vue({
  el: '#two',

  data: {
    foo: 'barzzz',
    shared: store
  }
});