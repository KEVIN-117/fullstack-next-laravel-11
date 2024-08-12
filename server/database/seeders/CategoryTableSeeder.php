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
                "name" => "Electronics",
                "slug" => "electronics",
                "description" => "Devices and gadgets including smartphones, laptops, and more."
            ],
            [
                "name" => "Home Appliances",
                "slug" => "home-appliances",
                "description" => "Appliances and equipment for home use such as refrigerators, washing machines, and ovens."
            ],
            [
                "name" => "Books",
                "slug" => "books",
                "description" => "A variety of books including fiction, non-fiction, and educational materials."
            ],
            [
                "name" => "Fashion",
                "slug" => "fashion",
                "description" => "Clothing, footwear, and accessories for men, women, and children."
            ],
            [
                "name" => "Sports & Outdoors",
                "slug" => "sports-outdoors",
                "description" => "Equipment and gear for sports, fitness, and outdoor activities."
            ],
            [
                "name" => "Health & Beauty",
                "slug" => "health-beauty",
                "description" => "Products for personal care, wellness, and beauty."
            ],
            [
                "name" => "Toys & Games",
                "slug" => "toys-games",
                "description" => "Toys, board games, and puzzles for children and adults."
            ],
            [
                "name" => "Automotive",
                "slug" => "automotive",
                "description" => "Parts, accessories, and tools for vehicles and automotive maintenance."
            ],
            [
                "name" => "Furniture",
                "slug" => "furniture",
                "description" => "Furniture for home and office, including chairs, tables, and storage solutions."
            ],
            [
                "name" => "Grocery & Gourmet Food",
                "slug" => "grocery-gourmet-food",
                "description" => "Food items, beverages, and gourmet products."
            ]
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
