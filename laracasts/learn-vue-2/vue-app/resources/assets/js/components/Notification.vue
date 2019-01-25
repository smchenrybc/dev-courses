<template>
  <div class="notification">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hello, world!'
      }
    }
  }
</script>

<style lang="scss">
  .notification {
    padding: 1.0em;
    background-color: #EEE;
    border-radius: 3px;

    :last-child {
      margin-bottom: 0;
    }
  }
</style>