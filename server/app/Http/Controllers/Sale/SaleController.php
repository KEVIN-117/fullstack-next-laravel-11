<?php

namespace App\Http\Controllers\Sale;

use App\Http\Controllers\Controller;
use App\Http\Resources\Sale\SaleCollection;
use App\Http\Resources\Sale\SaleResource;
use App\Models\Product;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new SaleCollection(Sale::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // GENERAR LA DESCRIPCION DE VENTA
        $sale = new Sale();
        $sale->clientName = $request->clientName;
        $sale->userName = $request->userName;
        $sale->userEmail = $request->userEmail;
        $sale->total = $request->total;
        $sale->user_id = $request->user_id;


        // GUARDAR VENTA
        $sale->save();



        // OBTENER LOS DETALES DE LA VENTA
        $products = $request->details;

        $details = [];



        // ASIGNAR ENCABEZADO DE VENTA
        foreach ($products as $product) {
            $details[] = [
                "sale_id" => $sale->id,
                ...$product,
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now()
            ];
            // VALIDAR STOCK
            $productUpdated = Product::find($product["product_id"]);
            if ($productUpdated->stock < $product["quantity"]) {
                return response()->json([
                    "message" => "Stock insuficiente se requieren " . $product["quantity"] . " unidades" . " de " . $productUpdated->name . " y solo hay " . $productUpdated->stock . " unidades",
                    "product" => [
                        "name" => $productUpdated->name,
                        "stock" => $productUpdated->stock,
                    ],
                    "quantity" => $product["quantity"],
                    "status" => 400
                ], 400);
            }
            // ACTUALIZAR STOCK
            $productUpdated["stock"] -= $product["quantity"];

            $productUpdated->update();

        }

        // GUARDAR DETALLES
        DB::table("sale_details")->insert($details);


        return response()->json([
            "message" => "Sale created successfully",
            "sale" => $sale,
            "details" => $details
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new SaleResource(Sale::find($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
