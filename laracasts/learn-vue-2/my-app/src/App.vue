<template>
  <div id="app">
    <message>Hello, world!</message>

    <message>Hello again!</message>
  </div>
</template>

<script>
import Message from './components/Message.vue';

export default {
  name: 'app',
  components: {
    Message
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
    font-size: 20px;
  }
  body {
    padding: 30px;
    font-family: sans-serif;
    font-size: 1rem;
    color: #333;
  }
  p {
    margin: 0 0 1.3rem;
  }
</style>
