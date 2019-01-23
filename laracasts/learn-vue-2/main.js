/**
 * main.js
 */

window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
}

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
      Event.fire('applied');
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

  created() {
    Event.listen('applied', () => alert('Handling it!'));
  }
});
