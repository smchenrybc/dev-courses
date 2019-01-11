@extends('layout')

{{-- @section('title')
    Welcome!
@endsection --}}

{{-- @section('title', 'Welcome!') --}}

@section('content')
    <div class="title m-b-md">
        My {{ $foo }} website!
    </div>

    <ul style="text-align: left;">
      @foreach( $tasks as $task )
        <li>{{ $task }}</li>
      @endforeach
    </ul>
@endsection
