<template>
  <div id="app">
    <counter></counter>
  </div>
</template>

<script>
import Counter from './components/Counter.vue';

export default {
  name: 'app',
  components: {
    Counter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  html {
    font-size: 16px;
  }
  body {
    font-family: sans-serif;
    font-size: 1rem;
    color: #333;
  }
  p {
    margin: 0 0 1.3rem;
  }
</style>
