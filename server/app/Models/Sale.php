<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;
    use HasUuids;

    protected $fillable = [
        'total',
        'clientName',
        'userName',
        'userEmail',
        'user_id',
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class, "sale_details")->withPivot(["quantity", "subTotal"]);
    }
}
