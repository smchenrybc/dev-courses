@extends('layout')

@section('content')
  <h1 class="title">{{ $project->title }}</h1>

  <div class="content">
    {{ $project->description }}
  </div>

  @if ($project->tasks->count())
    <div>
      <ul style="margin-bottom: 1.3em; list-style: circle; margin-left: 1.3em;">
        @foreach ($project->tasks as $task)
          <li>{{ $task->description }}</li>
        @endforeach
      </ul>
    </div>
  @endif

  <p>
    <a href="/projects/{{ $project->id }}/edit">Edit</a>
  </p>
@endsection
