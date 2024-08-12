<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    use HasUuids;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'category_id',
        'stock',
        'price',
        'image',
    ];


    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function sales(){
        return $this->belongsToMany(Sale::class, "sale_details");
    }
}
