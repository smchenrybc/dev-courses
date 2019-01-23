/**
 * main.js
 */

/*
Component
 */
Vue.component("coupon", {
  template: `
    <div class="field">
      <div class="control">
        <input class="input" placeholder="Enter your coupon code" @blur="onCouponApplied">
      </div>
    </div>
  `,

  methods: {
    onCouponApplied() {
      // alert('Applied!');

      this.$emit('applied');
    }
  }
});

/*
App
 */
var app = new Vue({
  el: "#root",

  data: {
    couponApplied: false
  },

  methods: {
    onCouponApplied() {
      // alert('Your coupon was applied!');

      this.couponApplied = true;
    }
  }
});
