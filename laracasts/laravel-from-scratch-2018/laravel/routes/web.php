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
    return view('welcome');
});

Route::get('projects/create', function () {
    return view('projects/create');
});

Route::post('projects', function () {
    // validate form
    // save project

    flash('Your project has been created.');

    // return redirect('/')->with('message', 'Your project has been created.');

    return redirect('/');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
