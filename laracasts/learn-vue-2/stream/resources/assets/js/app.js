/**
 * app.js
 */

Vue.component('coupon', {
  props: ['code'],

  template: `
    <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
  `,

  data() {
    return {
      invalids: ['ALLFREE', 'SPRING']
    }
  },

  methods: {
    updateCode(code) {
      if (this.invalids.includes(code)) {
        alert('Sorry! This coupon is no longer valid.');

        this.$refs.input.value = code = '';
      }

      this.$emit('input', code);
    }
  }
})

new Vue ({
  el: '#app',

  data: {
    coupon: 'Coupon code here'
  }
});
