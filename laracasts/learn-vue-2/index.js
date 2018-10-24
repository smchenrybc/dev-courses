/**
 * index.js
 */

var app = new Vue({
  el: "#root",
  data: {
    titleClass: 'color-red',
    buttonTitle: 'Button title set using Vue.js',
    isLoading: false,
    disabled: false
  },
  methods: {
    method() {

    },
    toggleClass() {
      if (this.isLoading === false) {
        this.isLoading = true;
      } else if (this.isLoading === true) {
        this.isLoading = false;
      }
    }
  }
});
