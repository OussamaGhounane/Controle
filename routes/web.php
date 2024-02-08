<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index');
});


Route::middleware('auth')->group(function () {
    Route::get('/posts', [PostController::class, 'edit'])->name('edit');
    Route::patch('/posts', [PostController::class, 'update'])->name('update');
    Route::delete('/posts', [PostController::class, 'destroy'])->name('destroy');
    Route::resource('posts', App\Http\Controllers\PostController::class);
});
