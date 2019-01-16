<!DOCTYPE html>
<html>
<head>
  <title></title>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css">
</head>
<body style="padding: 30px;">
  <div class="container">
    <h1 class="title">Create a New Project</h1>

    <form method="POST" action="/projects">
      {{ csrf_field() }}

      <div class="field">
        <div class="control">
          <input class="input {{ $errors->has('title') ? 'is-danger' : '' }}" type="text" name="title" placeholder="Project title" value="{{ old('title') }}" required />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea {{ $errors->has('description') ? 'is-danger' : '' }}" name="description" placeholder="Project description" required>{{ old('description') }}</textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-link" type="submit">Create Project</button>
        </div>
      </div>

      @include('errors')
    </form>
  </div>
</body>
</html>