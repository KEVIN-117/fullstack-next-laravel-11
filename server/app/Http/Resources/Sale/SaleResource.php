<?php

namespace App\Http\Resources\Sale;

use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class SaleResource extends JsonResource
{
    public static $wrap = 'sale';
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $product = Sale::find($this->id)->products;
        return [
            'id' => $this->id,
            'clientName' => $this->clientName,
            'user' => $this->userName,
            'email' => $this->userEmail,
            'user_id' => $this->user_id,
            'products' => new DetailsCollection($product),
            'total' => $this->total,
            'createdAt' => $this->created_at,
        ];
    }
}
