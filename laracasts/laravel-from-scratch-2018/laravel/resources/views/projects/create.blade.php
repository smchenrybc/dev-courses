<?php
/**
 * create.blade.php
 */
?>

<!DOCTYPE html>
<html>
<head>
  <title>Create a Project</title>
  <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">
</head>

<body>
  <form class="pure-form pure-form-aligned" method="POST" action="/projects">
    @csrf

    <fieldset>
      <div class="pure-control-group">
        <label for="name">Project Title</label>
        <input type="text" placeholder="Project title" name="title">
      </div>

      <div class="pure-control-group">
        <label for="description">Project Description</label>
        <textarea placeholder="Describe your project." name="description"></textarea>
      </div>

      <div class="pure-controls">
        <button class="pure-button" type="submit">Create Project</button>
      </div>
    </fieldset>
  </form>
</body>
</html>