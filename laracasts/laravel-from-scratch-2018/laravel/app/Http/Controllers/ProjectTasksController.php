<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Task;
use App\Project;

class ProjectTasksController extends Controller
{
    public function store(Project $project) {
        $attributes = request()->validate([
            'description' => 'required|max:255']
        );

        $project->addTask($attributes);

        return back();
    }

    public function update(Task $task) {
        // dd(request()->all());

        $task->update([
            'completed' => request()->has('completed')
        ]);

        return back();
    }
}
