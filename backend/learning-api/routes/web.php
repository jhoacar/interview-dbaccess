<?php

use Illuminate\Http\Request;
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

Route::get('/', function (Request $request) {
    $message = 'Welcome to Home Page, you need to go http://' .$request->getHost() . ':' .  $request->getPort(). '/api';
    return response()->json(['greetings' => $message ],200);
    //return view('welcome');
});

Route::get('/api', function (Request $request) {
    $message = 'Welcome to Learning API, you can see documentation at http://' . $request->getHost() . ':' .  $request->getPort(). '/api/documentation';
    return response()->json(['greetings' => $message ],200);
    //return view('welcome');
});
