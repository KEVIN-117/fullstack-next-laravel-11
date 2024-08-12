<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Smartphone',
                'slug' => 'smartphone',
                'description' => 'Latest model with high-resolution display and advanced camera features.',
                'category_id' => 'a01288eb-9a9c-45a2-976b-f314c4702006', // Electronics
                'stock' => 150,
                'price' => 699.99,
                'image' => 'https://example.com/images/smartphone.jpg',
            ],
            [
                'name' => 'Laptop',
                'slug' => 'laptop',
                'description' => 'Powerful laptop with 16GB RAM and 512GB SSD storage.',
                'category_id' => 'a01288eb-9a9c-45a2-976b-f314c4702006', // Electronics
                'stock' => 50,
                'price' => 1099.99,
                'image' => 'https://example.com/images/laptop.jpg',
            ],
            [
                'name' => 'Refrigerator',
                'slug' => 'refrigerator',
                'description' => 'Energy-efficient refrigerator with spacious interior.',
                'category_id' => 'd143e3f2-c9d7-4eec-a5af-eb1b70f000a6', // Home Appliances
                'stock' => 20,
                'price' => 899.99,
                'image' => 'https://example.com/images/refrigerator.jpg',
            ],
            [
                'name' => 'Washing Machine',
                'slug' => 'washing-machine',
                'description' => 'Top-loading washing machine with quick wash cycle.',
                'category_id' => 'd143e3f2-c9d7-4eec-a5af-eb1b70f000a6', // Home Appliances
                'stock' => 30,
                'price' => 499.99,
                'image' => 'https://example.com/images/washing-machine.jpg',
            ],
            [
                'name' => 'Fiction Novel',
                'slug' => 'fiction-novel',
                'description' => 'Bestselling fiction novel by a renowned author.',
                'category_id' => 'b433669b-a2b1-4893-864d-0a9ba187d9eb', // Books
                'stock' => 200,
                'price' => 19.99,
                'image' => 'https://example.com/images/fiction-novel.jpg',
            ],
            [
                'name' => 'Textbook',
                'slug' => 'textbook',
                'description' => 'Educational textbook for university students.',
                'category_id' => 'b433669b-a2b1-4893-864d-0a9ba187d9eb', // Books
                'stock' => 100,
                'price' => 89.99,
                'image' => 'https://example.com/images/textbook.jpg',
            ],
            [
                'name' => 'Men\'s Jacket',
                'slug' => 'mens-jacket',
                'description' => 'Warm and stylish jacket for winter.',
                'category_id' => '3403a971-471e-448f-8c4d-fd7318bb8a15', // Fashion
                'stock' => 75,
                'price' => 129.99,
                'image' => 'https://example.com/images/mens-jacket.jpg',
            ],
            [
                'name' => 'Women\'s Shoes',
                'slug' => 'womens-shoes',
                'description' => 'Comfortable and fashionable shoes for everyday wear.',
                'category_id' => '3403a971-471e-448f-8c4d-fd7318bb8a15', // Fashion
                'stock' => 100,
                'price' => 89.99,
                'image' => 'https://example.com/images/womens-shoes.jpg',
            ],
            [
                'name' => 'Treadmill',
                'slug' => 'treadmill',
                'description' => 'High-performance treadmill with multiple workout programs.',
                'category_id' => '575700f7-21cb-4a5e-ad17-622bbb7b3e24', // Sports & Outdoors
                'stock' => 25,
                'price' => 799.99,
                'image' => 'https://example.com/images/treadmill.jpg',
            ],
            [
                'name' => 'Yoga Mat',
                'slug' => 'yoga-mat',
                'description' => 'Durable and non-slip yoga mat for all types of exercises.',
                'category_id' => '575700f7-21cb-4a5e-ad17-622bbb7b3e24', // Sports & Outdoors
                'stock' => 150,
                'price' => 29.99,
                'image' => 'https://example.com/images/yoga-mat.jpg',
            ],
            [
                'name' => 'Facial Cleanser',
                'slug' => 'facial-cleanser',
                'description' => 'Gentle facial cleanser suitable for all skin types.',
                'category_id' => '198896cd-7e3d-4486-9f62-5e068bfebf19', // Health & Beauty
                'stock' => 200,
                'price' => 14.99,
                'image' => 'https://example.com/images/facial-cleanser.jpg',
            ],
            [
                'name' => 'Shampoo',
                'slug' => 'shampoo',
                'description' => 'Nourishing shampoo for healthy and shiny hair.',
                'category_id' => '198896cd-7e3d-4486-9f62-5e068bfebf19', // Health & Beauty
                'stock' => 180,
                'price' => 9.99,
                'image' => 'https://example.com/images/shampoo.jpg',
            ],
            [
                'name' => 'Action Figure',
                'slug' => 'action-figure',
                'description' => 'Collectible action figure from a popular movie series.',
                'category_id' => '5eea9366-8329-4519-857f-f2db3397ccb4', // Toys & Games
                'stock' => 120,
                'price' => 24.99,
                'image' => 'https://example.com/images/action-figure.jpg',
            ],
            [
                'name' => 'Puzzle',
                'slug' => 'puzzle',
                'description' => '1000-piece puzzle with a beautiful landscape design.',
                'category_id' => '5eea9366-8329-4519-857f-f2db3397ccb4', // Toys & Games
                'stock' => 90,
                'price' => 14.99,
                'image' => 'https://example.com/images/puzzle.jpg',
            ],
            [
                'name' => 'Car Tires',
                'slug' => 'car-tires',
                'description' => 'Durable and high-performance tires for all seasons.',
                'category_id' => 'eed2b6fb-0e1f-4e36-b7ff-8f038ab0010e', // Automotive
                'stock' => 50,
                'price' => 129.99,
                'image' => 'https://example.com/images/car-tires.jpg',
            ],
            [
                'name' => 'Car Battery',
                'slug' => 'car-battery',
                'description' => 'Long-lasting car battery with high starting power.',
                'category_id' => 'eed2b6fb-0e1f-4e36-b7ff-8f038ab0010e', // Automotive
                'stock' => 40,
                'price' => 149.99,
                'image' => 'https://example.com/images/car-battery.jpg',
            ],
            [
                'name' => 'Office Chair',
                'slug' => 'office-chair',
                'description' => 'Ergonomic office chair with lumbar support.',
                'category_id' => '2a2d2000-1cb4-48e6-ad0d-e3c7a17c38ea', // Furniture
                'stock' => 60,
                'price' => 199.99,
                'image' => 'https://example.com/images/office-chair.jpg',
            ],
            [
                'name' => 'Dining Table',
                'slug' => 'dining-table',
                'description' => 'Modern dining table with a wooden finish.',
                'category_id' => '2a2d2000-1cb4-48e6-ad0d-e3c7a17c38ea', // Furniture
                'stock' => 20,
                'price' => 299.99,
                'image' => 'https://example.com/images/dining-table.jpg',
            ],
            [
                'name' => 'Organic Coffee Beans',
                'slug' => 'organic-coffee-beans',
                'description' => 'Premium organic coffee beans with a rich flavor.',
                'category_id' => '0017e7c8-dc72-4377-9357-12869c8e5944', // Grocery & Gourmet Food
                'stock' => 100,
                'price' => 19.99,
                'image' => 'https://example.com/images/organic-coffee-beans.jpg',
            ],
            [
                'name' => 'Gourmet Chocolate',
                'slug' => 'gourmet-chocolate',
                'description' => 'Delicious gourmet chocolate made from high-quality cocoa.',
                'category_id' => '0017e7c8-dc72-4377-9357-12869c8e5944', // Grocery & Gourmet Food
                'stock' => 150,
                'price' => 12.99,
                'image' => 'https://example.com/images/gourmet-chocolate.jpg',
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
