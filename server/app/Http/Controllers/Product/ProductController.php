<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product\ProductCollection;
use App\Http\Resources\Product\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::paginate(8);

        if (empty($products)){
            return response()->json([
                "message" => "There are no registered products",
                "status" => 200
            ], 200);
        }

        return new ProductCollection($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request["slug"] = $this->createSlug($request->name);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:products',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'category_id' => 'required|uuid|exists:categories,id',
            'stock' => 'integer',
            'image' => 'string'
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => "Validation failed",
                "errors" => $validator->errors(),
                "status" => 400
            ], 400);
        }

        $product = Product::create($request->all());

        if(!$product){
            return response()->json([
                "message" => "Error creating product",
                "status" => 500
            ], 500);
        }

        return response()->json([
            "message" => "Product created successfully",
            "product" => new ProductCollection($product),
            "status" => 201
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::where('id', $id)->first();

        return response()->json([
            "product" => new ProductResource($product),
            "status" => 200
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);

        if(!$product){
            return response()->json([
                "message" => "Product not found",
                "status" => 404
            ], 404);
        }

        if($request->name){
            $product->slug = $this->createSlug($request->name);
        }

        $product->update($request->all());

        return response()->json([
            "message" => "Product updated successfully",
            "product" => $product,
            "status" => 200
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $product = Product::find($id);

        if(!$product){
            return response()->json([
                "message" => "Product not found",
                "status" => 404
            ], 404);
        }

        $product->delete();

        return response()->json([
            "message" => "Product whith name $product->name deleted successfully",
            "status" => 200
        ], 200);
    }

    private function createSlug(string $name): string
    {
        $name = strtolower($name);
        $name = preg_replace('/[^a-z0-9]+/', '-', $name);
        $name = trim($name, "-");
        $name = preg_replace('/_+/', '-', $name);
        return $name;
    }
}
