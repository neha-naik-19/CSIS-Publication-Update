<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;

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

Route::get('/home', function () {
    return view('home');
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// PUBLICATION - ADD
Route::get('department', [App\Http\Controllers\HomeController::class, 'displayDepartment']);
Route::post('postdepartmentid', [App\Http\Controllers\HomeController::class, 'postdepartmentid']);
Route::get('displayDepartmentForEveryYear', [App\Http\Controllers\HomeController::class, 'displayDepartmentForEveryYear']);

Route::get('/publication/add',   [App\Http\Controllers\Publication\AddController::class, 'index'])->name('publication.add');
Route::get('showarticle', [App\Http\Controllers\Publication\AddController::class, 'showarticle']);

Route::post('gettitle', [App\Http\Controllers\Publication\AddController::class, 'get_title_data']);
Route::get('check_title_duplication', [App\Http\Controllers\Publication\AddController::class, 'check_dup_title']);

Route::post('getconference', [App\Http\Controllers\Publication\AddController::class, 'get_conference_data']);
Route::get('check_conference_duplication', [App\Http\Controllers\Publication\AddController::class, 'check_dup_conference']);
Route::post('writetodb', [App\Http\Controllers\Publication\AddController::class, 'store']);
//

Route::get('/publication/view-edit',  [App\Http\Controllers\Publication\EditController::class, 'index'])->name('publication.edit');

Route::get('/publication/bibtex', [App\Http\Controllers\Publication\BibtexController::class, 'index'])->name('publication.bibtex');

Route::get('/publication/print', [App\Http\Controllers\Publication\PrintController::class, 'index'])->name('publication.print');

// Route::get('/user', [UserController::class, 'index']);