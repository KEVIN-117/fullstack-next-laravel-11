<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Sale\SaleController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Product\ProductController;



Route::controller(AuthController::class)->group(function () {
    Route::post('/auth/login', 'login');
});


Route::middleware(["auth:sanctum"])->group(function () {
    // Route::get('/categories', [CategoryController::class, 'index']);
    // Route::post('/categories', [CategoryController::class, 'store']);
    // Route::get('/categories/{id}', [CategoryController::class, 'show']);
    // Route::patch('/categories/{id}', [CategoryController::class, 'update']);
    // Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);
    Route::apiResource("categories", CategoryController::class);
    Route::post('/categories/search', [CategoryController::class, 'search']);


    Route::get('/products', [ProductController::class, 'index']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/products/all', [ProductController::class, 'all']);
    Route::get('/products/{id}', [ProductController::class, 'show']);
    Route::patch('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);


    Route::apiResource("sales", SaleController::class)
        ->only(["index", "store", "show"]);

    Route::controller(AuthController::class)->group(function () {
        Route::post('/auth/register', 'register');
        Route::post('/auth/logout', 'logout');
        Route::get('/auth/checkToken', 'checkToken');
        Route::get('/auth/getUser', 'getUser');
    });
});
