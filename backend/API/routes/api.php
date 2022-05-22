<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Ações dos Users
Route::get('user'           ,   'App\Http\Controllers\UserController@getAllUsers');
Route::get('user/{id}'      ,   'App\Http\Controllers\UserController@getUser');
Route::post('user'          ,   'App\Http\Controllers\UserController@createUser');
Route::put('user/{id}'      ,   'App\Http\Controllers\UserController@updateUser');
Route::delete('user/{id}'   ,   'App\Http\Controllers\UserController@deleteUser');

//Ações dos Customers
Route::get('customer'           ,   'App\Http\Controllers\CustomerController@getAllCustomers');
Route::get('customer/{id}'      ,   'App\Http\Controllers\CustomerController@getCustomer');
Route::post('customer'          ,   'App\Http\Controllers\CustomerController@createCustomer');
Route::put('customer/{id}'      ,   'App\Http\Controllers\CustomerController@updateCustomer');
Route::delete('customer/{id}'   ,   'App\Http\Controllers\CustomerController@deleteCustomer');

//Ações de Feedback
Route::get('feedback/customer/{id}' , 'App\Http\Controllers\FeedbackController@getFeedbackCustomer'); //retorna todos os feedbacks relacionados ao customer
Route::get('feedback/{id}'          , 'App\Http\Controllers\FeedbackController@getFeedback'); //retorna o feedback de acordo com o id do feedback
Route::get('feedback/user/{id}'     , 'App\Http\Controllers\FeedbackController@getFeedbackUser'); //retorna todos os feedbacks feitos pelo usuário
Route::post('feedback'              , 'App\Http\Controllers\FeedbackController@createFeedback'); //cria feedback
Route::put('feedback/{id}'          , 'App\Http\Controllers\FeedbackController@updateFeedback'); //altera feedback
Route::delete('feedback/{id}'       , 'App\Http\Controllers\FeedbackController@deleteFeedback'); //apaga feedback

//Ações de Photos
Route::get('photo/customer/{idCustomer}' ,   'App\Http\Controllers\PhotoController@getAllPhotos'); //retorna fotos por customer
Route::get('photo/{id}'                  ,   'App\Http\Controllers\PhotoController@getPhoto'); //retorna foto pelo id
Route::post('photo'                      ,   'App\Http\Controllers\PhotoController@uploadPhoto'); //realiza upload de foto
Route::put('photo/{id}'                  ,   'App\Http\Controllers\PhotoController@updatePhoto'); //atualiza dados de imagem
Route::delete('photo/{id}'               ,   'App\Http\Controllers\PhotoController@deletePhoto'); //apaga imagem do banco