@if (count($projects))
	<h2 class="title is-3">My Projects</h2>

	<ul>
		@foreach ($projects as $project)
			<li>
				<a href="#">{{ $project->name }}</a>
			</li>
		@endforeach
	</ul>

	<hr>
@endif
