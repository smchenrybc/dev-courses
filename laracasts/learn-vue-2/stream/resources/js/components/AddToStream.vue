<template>
  <div class="message">
    <div class="message-header">
      Push to the Stream
    </div>

    <div class="message-body">
      <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
        <p class="control">
          <textarea class="textarea" placeholder="Enter your status here..." v-model="form.body"></textarea>

          <span class="help is-danger" v-if="form.errors.has('body')" v-text="form.errors.get('body')"></span>
        </p>

        <p class="control">
          <button class="button is-danger" :disabled="form.errors.any()">Submit</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: new Form({
          body: ''
        })
      }
    },

    methods: {
      onSubmit() {
        // submit AJAX request
        this.form
          .post('/statuses')
          .then(status => this.$emit('completed', status));
      }
    }
  }
</script>
