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


Route::get('/', fn () => view('app'))->name('app');

Route::get('/reset-password/{token}', fn () => view('app'))
    ->middleware(['guest:' . config('fortify.guard')])
    ->name('password.reset');

Route::get('{any}', fn () => view('app'))->where('any', '^((?!api).).*');

//Route::get('{path?}', fn () => view('vue'))->where('path', '^((?!api).)*');
