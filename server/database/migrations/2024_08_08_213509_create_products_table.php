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
        Schema::create('products', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name')->unique()->notNullable();
            $table->string('slug')->notNullable();
            $table->text('description')->nullable();
            $table->foreignUuid('category_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->integer('stock')->default(0);
            $table->double('price');
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
