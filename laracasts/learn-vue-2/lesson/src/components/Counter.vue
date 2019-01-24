<template>
  <div>
    <h2 class="mt0">The Count is: {{ count }}</h2>

    <p>
      <button class="btn btn-primary" @click="count += 5">Increment</button>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      };
    }
  }
</script>