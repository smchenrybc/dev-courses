<template>
  <div class="box">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .box {
    padding: 1rem;
    margin-bottom: 1.3rem;
    background-color: #EEE;
    border: 1px solid #CCC;
    border-radius: 2px;
  }
  .box :last-child {
    margin-bottom: 0;
  }
</style>