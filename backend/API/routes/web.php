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
    return view('welcome');
});

Route::get('customer', 'CustomerController@getAllCustomers');
Route::get('customer/{id}', 'CustomerController@getCustomer');
Route::post('customer', 'CustomerController@createCustomer');
Route::put('customer/{id}', 'CustomerController@updateCustomer');
Route::delete('customer/{id}', 'CustomerController@deleteCustomer');