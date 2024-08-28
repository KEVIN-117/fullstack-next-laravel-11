<?php

namespace App\Http\Resources\Sale;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "name" => $this->name,
            "slug" => $this->slug,
            "price" => $this->price,
            "image" => $this->image,
            "quantity" => $this->pivot->quantity,
            "subtotal" => floatval($this->pivot->subTotal),
        ];
    }
}
