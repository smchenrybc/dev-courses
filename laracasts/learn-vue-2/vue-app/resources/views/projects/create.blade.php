<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Create a Project</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css" rel="stylesheet" type="text/css">
        <style>
          body {
            padding: 30px;
          }
          .control {
            margin-bottom: 1.3rem;
          }
        </style>
    </head>
    <body>
        <div id="app" class="container">
          @include ('projects.list')

          <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
            <div class="control">
              <label class="label" for="name">Project Name:</label>

              <input id="name" class="input" type="text" name="name" v-model="form.name">

              <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
            </div>

            <div class="control">
              <label class="label" for="description">Project Description:</label>

              <input id="description" class="input" type="text" name="description" v-model="form.description">

              <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
            </div>

            <div class="control">
              <button class="button is-primary" :disabled="form.errors.any()">Create</button>
            </div>
          </form>
        </div>

        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://unpkg.com/vue@2.1.6/dist/vue.js"></script>
        <script src="/js/app.js"></script>
    </body>
</html>
