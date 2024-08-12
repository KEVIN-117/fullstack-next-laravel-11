<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sale_details', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->foreignUuid("sale_id")->constrained()->onDelete("cascade")->nullable();
            $table->foreignUuid("product_id")->constrained()->nullable();
            $table->string("productName");
            $table->string("productSlug");
            $table->double("productPrice");
            $table->integer("quantity");
            $table->double("subTotal");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sale_details');
    }
};
