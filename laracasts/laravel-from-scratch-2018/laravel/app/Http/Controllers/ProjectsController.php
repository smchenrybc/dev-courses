<?php

namespace App\Http\Controllers;

use App\Project;
use App\Services\Twitter;

class ProjectsController extends Controller
{
  public function index()
  {
    $projects = Project::all();

    return view('projects.index', compact('projects'));
  }

  public function show(Project $project, Twitter $twitter) {
    dd($twitter);

    return view('projects.show', compact('project'));
  }

  public function create() {
    return view('projects.create');
  }

  public function store() {
    $atts = request()->validate([
      'title' => ['required', 'min:3', 'max:255'],
      'description' => ['required', 'min:3']
    ]);

    Project::create($atts);

    return redirect('/projects');
  }

  public function edit(Project $project) {
    return view('projects.edit', compact('project'));
  }

  public function update(Project $project) {
    $project->update(request(['title', 'description']));

    return redirect('/projects');
  }

  public function destroy(Project $project) {
    $project->delete();

    return redirect('/projects');
  }
}
