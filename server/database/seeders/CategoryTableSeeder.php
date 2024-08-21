<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                "id" => "a01288eb-9a9c-45a2-976b-f314c4702006",
                "name" => "Electronics",
                "slug" => "electronics",
                "description" => "Devices and gadgets including smartphones, laptops, and more."
            ],
            [
                "id" => "d143e3f2-c9d7-4eec-a5af-eb1b70f000a6",
                "name" => "Home Appliances",
                "slug" => "home-appliances",
                "description" => "Appliances and equipment for home use such as refrigerators, washing machines, and ovens."
            ],
            [
                "id" => "b433669b-a2b1-4893-864d-0a9ba187d9eb",
                "name" => "Books",
                "slug" => "books",
                "description" => "A variety of books including fiction, non-fiction, and educational materials."
            ],
            [
                "id" => "3403a971-471e-448f-8c4d-fd7318bb8a15",
                "name" => "Fashion",
                "slug" => "fashion",
                "description" => "Clothing, footwear, and accessories for men, women, and children."
            ],
            [
                "id" => "575700f7-21cb-4a5e-ad17-622bbb7b3e24",
                "name" => "Sports & Outdoors",
                "slug" => "sports-outdoors",
                "description" => "Equipment and gear for sports, fitness, and outdoor activities."
            ],
            [
                "id" => "198896cd-7e3d-4486-9f62-5e068bfebf19",
                "name" => "Health & Beauty",
                "slug" => "health-beauty",
                "description" => "Products for personal care, wellness, and beauty."
            ],
            [
                "id" => "5eea9366-8329-4519-857f-f2db3397ccb4",
                "name" => "Toys & Games",
                "slug" => "toys-games",
                "description" => "Toys, board games, and puzzles for children and adults."
            ],
            [
                "id" => "eed2b6fb-0e1f-4e36-b7ff-8f038ab0010e",
                "name" => "Automotive",
                "slug" => "automotive",
                "description" => "Parts, accessories, and tools for vehicles and automotive maintenance."
            ],
            [
                "id" => "2a2d2000-1cb4-48e6-ad0d-e3c7a17c38ea",
                "name" => "Furniture",
                "slug" => "furniture",
                "description" => "Furniture for home and office, including chairs, tables, and storage solutions."
            ],
            [
                "id" => "0017e7c8-dc72-4377-9357-12869c8e5944",
                "name" => "Grocery & Gourmet Food",
                "slug" => "grocery-gourmet-food",
                "description" => "Food items, beverages, and gourmet products."
            ],
            [
                "id" => "9cc32d96-22e5-4d1a-ba19-59a7a20f4973",
                "name" => "Hogar y Cocina",
                "slug" => "hogar-y-cocina",
                "description" => "Productos para el hogar, muebles, utensilios de cocina y decoración."
            ]
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
