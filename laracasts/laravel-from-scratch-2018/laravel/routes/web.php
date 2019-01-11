<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $tasks = [
      'Go to the work',
      'Go to the gym',
      'Go to the store',
      'Make dinner',
      'Go to bed'
    ];

    // return view('welcome', [
    //   'tasks' => $tasks,
    //   'foo' => 'foobar'
    // ]);

    // return view('welcome')->withTasks($tasks)->withFoo('foobar');

    // return view('welcome')->withTasks([
    //   'Go to the work',
    //   'Go to the gym',
    //   'Go to the store'
    // ])->withFoo('foobar');

    return view('welcome')->with([
      'foo' => 'foobar',
      'tasks' => $tasks
    ]);
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/about', function () {
    return view('about');
});
