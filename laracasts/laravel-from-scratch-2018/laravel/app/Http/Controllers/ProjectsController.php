<?php

namespace App\Http\Controllers;

use App\Project;
use App\Services\Twitter;

class ProjectsController extends Controller
{
  public function __construct() {
    $this->middleware('auth');
  }

  public function index()
  {
    $projects = Project::where('owner_id', auth()->id())->get();

    return view('projects.index', compact('projects'));
  }

  public function show(Project $project) {
    // abort_if()
    // abort_unless()

    // $this->authorize('view', $project);

    // if(\Gate::denies('view', $project)) {
    //   abort(403);
    // }

    // abort_if(\Gate::denies('view', $project), 403);

    // abort_unless(\Gate::allows('view', $project), 403);

    $this->authorize('update', $project);

    return view('projects.show', compact('project'));
  }

  public function create() {
    return view('projects.create');
  }

  public function store() {
    $attributes = request()->validate([
      'title' => ['required', 'min:3', 'max:255'],
      'description' => ['required', 'min:3']
    ]);

    // add owner ID
    $attributes['owner_id'] = auth()->id();

    Project::create($attributes);

    return redirect('/projects');
  }

  public function edit(Project $project) {
    return view('projects.edit', compact('project'));
  }

  public function update(Project $project) {
    $this->authorize('update', $project);

    $project->update(request(['title', 'description']));

    return redirect('/projects');
  }

  public function destroy(Project $project) {
    $this->authorize('update', $project);

    $project->delete();

    return redirect('/projects');
  }
}
