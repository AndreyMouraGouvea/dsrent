<?php

use Illuminate\Support\Facades\Route;

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
    return view('home');
});

Route::get('/sobre', function () {
    return view('sobre');
});

Route::get('/pesquisa', function () {
    return view('pesquisa');
});

Route::get('/planos', function () {
    return view('planos');
});

Route::get('/mapa', function () {
    return view('map');
});

Route::get('/login', 'App\Http\Controllers\UserController@index');
Route::get('/login/checklogin', 'App\Http\Controllers\UserController@checklogin');
Route::get('/login/successlogin', 'App\Http\Controllers\UserController@successlogin');
Route::get('/login/logout', 'App\Http\Controllers\UserController@logout');
