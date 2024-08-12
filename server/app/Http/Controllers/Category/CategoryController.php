<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $categories = Category::all();

        return response()->json([
            "message" => "Categories retrieved successfully",
            "categories" => $categories
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //$request->validated();
        $request["slug"] = $this->createSlug($request->name);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:categories',
            'description' => 'required|string'
        ]);


        if ($validator->fails()) {
            return response()->json([
                "message" => "Validation failed",
                "errors" => $validator->errors(),
                "status" => 400
            ], 400);
        }

        $category = Category::create($request->all());

        if (!$category) {
            return response()->json([
                "message" => "Error creating category",
                "status" => 500
            ], 500);
        }

        return response()->json([
            "message" => "Category created successfully",
            "category" => $category,
            "status" => 201
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $category = Category::where('id', $id)->first();

        return response()->json([
            "category" => $category,
            "status" => 200
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                "message" => "Category not found",
                "status" => 404
            ], 404);
        }

        if ($request->name) {
            $request["slug"] = $this->createSlug($request->name);
        }

        $category->update($request->all());

        return response()->json([
            "message" => "Category updated successfully",
            "category" => $category,
            "status" => 200
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                "message" => "Category not found",
                "status" => 404
            ], 404);
        }

        $category->delete();

        return response()->json([
            "message" => "Category whith name $category->name deleted successfully",
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

    public function search(Request $request){
        $categories = DB::select('select * from categories where name like ?', ["%$request->name%"]);

        if (count($categories) == 0) {
            return response()->json([
                "message" => "Category not found",
                "status" => 404
            ], 404);
        }

        return response()->json([
            "message" => "Categories retrieved successfully",
            "categories" => $categories
        ], 200);
    }
}
