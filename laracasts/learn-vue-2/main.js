/**
 * main.js
 */

/*
Component
 */
Vue.component("coupon", {
  template: `
  <input>
  `
});

/*
App
 */
var app = new Vue({
  el: "#root",
  methods: {
    onCouponApplied() {
      alert('Your coupon was applied!');
    }
  }
});
