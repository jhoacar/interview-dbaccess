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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('cors:api')->apiResource("/courses","CourseController");
Route::middleware('cors:api')->apiResource("/students","StudentController");
Route::middleware('cors:api')->apiResource("/instructors","InstructorController");

// Route::get("/courses","CourseController@index");
// Route::post("/courses","CourseController@store");
// Route::put("/courses/{id}","CourseController@update");
// Route::delete("/courses/{id}","CourseController@destroy");


// Route::get("/students","StudentController@index");
// Route::post("/students","StudentController@store");
// Route::match(["PUT","PATCH"],"/students/{id}","StudentController@update");
// Route::delete("/students/{id}","StudentController@destroy");

// Route::get("/instructors","InstructorController@index");
// Route::post("/instructors","InstructorController@store");
// Route::put("/instructors/{id}","InstructorController@update");
// Route::delete("/instructors/{id}","InstructorController@destroy");



