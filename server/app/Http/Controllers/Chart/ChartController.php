<?php

namespace App\Http\Controllers\Chart;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;

class ChartController extends Controller
{
    //
    public function salesByCategories()
    {
        $data = DB::table('categories')
            ->join('products', 'products.category_id', '=', 'categories.id')
            ->join('sale_details', 'sale_details.product_id', '=', 'products.id')
            ->groupBy('categories.name')
            ->selectRaw('categories.name as name, sum(price) as sales');

        return response()->json([
            'salesByCategories' => $data->get()
        ]);
    }

    public function inventoryData(){
        $data = DB::table('products')
            ->join('categories', 'products.category_id', '=', 'categories.id')
            ->selectRaw('categories.name as category, sum(products.stock) as stock')
            ->groupBy('categories.name');

        return response()->json([
            'inventoryData' => $data->get()
        ]);
    }
}
