<!DOCTYPE html>
<html>
<head>
  <title></title>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css">
</head>
<body style="padding: 30px;">
  <div class="container">
    <h1 class="title">Projects</h1>

    @foreach($projects as $project)
      <li>
        <a href="/projects/{{ $project->id }}">
          {{ $project->title }}
        </a>
      </li>
    @endforeach
  </div>
</body>
</html>