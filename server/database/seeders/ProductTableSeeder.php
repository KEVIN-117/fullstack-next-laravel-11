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
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723181033/movile-bg/d46d1d6b99add90e6206384de47c7c18_peajv8.jpg',
            ],
            [
                'name' => 'Laptop',
                'slug' => 'laptop',
                'description' => 'Powerful laptop with 16GB RAM and 512GB SSD storage.',
                'category_id' => 'a01288eb-9a9c-45a2-976b-f314c4702006', // Electronics
                'stock' => 50,
                'price' => 1099.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723181032/movile-bg/9540fbbebdce5a97b25d25cfea2bc0a6_krmuyy.jpg',
            ],
            [
                'name' => 'Refrigerator',
                'slug' => 'refrigerator',
                'description' => 'Energy-efficient refrigerator with spacious interior.',
                'category_id' => 'd143e3f2-c9d7-4eec-a5af-eb1b70f000a6', // Home Appliances
                'stock' => 20,
                'price' => 899.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723180896/movile-bg/d46d1d6b99add90e6206384de47c7c18_ojjuaa.jpg',
            ],
            [
                'name' => 'Washing Machine',
                'slug' => 'washing-machine',
                'description' => 'Top-loading washing machine with quick wash cycle.',
                'category_id' => 'd143e3f2-c9d7-4eec-a5af-eb1b70f000a6', // Home Appliances
                'stock' => 30,
                'price' => 499.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140812/movile-bg/fc6705723e362220d554f62de472cefb_movktx.jpg',
            ],
            [
                'name' => 'Fiction Novel',
                'slug' => 'fiction-novel',
                'description' => 'Bestselling fiction novel by a renowned author.',
                'category_id' => 'b433669b-a2b1-4893-864d-0a9ba187d9eb', // Books
                'stock' => 200,
                'price' => 19.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140812/movile-bg/ef95e0261d94344cd7cf59567e3f1326_z035hk.jpg',
            ],
            [
                'name' => 'Textbook',
                'slug' => 'textbook',
                'description' => 'Educational textbook for university students.',
                'category_id' => 'b433669b-a2b1-4893-864d-0a9ba187d9eb', // Books
                'stock' => 100,
                'price' => 89.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140811/movile-bg/b7d65fe0f772bd587bad14f8ef2db786_a5lylh.jpg',
            ],
            [
                'name' => 'Men\'s Jacket',
                'slug' => 'mens-jacket',
                'description' => 'Warm and stylish jacket for winter.',
                'category_id' => '3403a971-471e-448f-8c4d-fd7318bb8a15', // Fashion
                'stock' => 75,
                'price' => 129.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140810/movile-bg/b7288b101857d765089512e99422262b_kahy9h.jpg',
            ],
            [
                'name' => 'Women\'s Shoes',
                'slug' => 'womens-shoes',
                'description' => 'Comfortable and fashionable shoes for everyday wear.',
                'category_id' => '3403a971-471e-448f-8c4d-fd7318bb8a15', // Fashion
                'stock' => 100,
                'price' => 89.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140809/movile-bg/ac793ce8d40688c9882c51f8fab65968_ejhuxq.jpg',
            ],
            [
                'name' => 'Treadmill',
                'slug' => 'treadmill',
                'description' => 'High-performance treadmill with multiple workout programs.',
                'category_id' => '575700f7-21cb-4a5e-ad17-622bbb7b3e24', // Sports & Outdoors
                'stock' => 25,
                'price' => 799.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140809/movile-bg/a3b8488391185f514fd984f850b166ec_fdqpu0.jpg',
            ],
            [
                'name' => 'Yoga Mat',
                'slug' => 'yoga-mat',
                'description' => 'Durable and non-slip yoga mat for all types of exercises.',
                'category_id' => '575700f7-21cb-4a5e-ad17-622bbb7b3e24', // Sports & Outdoors
                'stock' => 150,
                'price' => 29.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140808/movile-bg/9530bbb4e4fdc7dd3530d1c0165afdf8_djyibb.jpg',
            ],
            [
                'name' => 'Facial Cleanser',
                'slug' => 'facial-cleanser',
                'description' => 'Gentle facial cleanser suitable for all skin types.',
                'category_id' => '198896cd-7e3d-4486-9f62-5e068bfebf19', // Health & Beauty
                'stock' => 200,
                'price' => 14.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140807/movile-bg/93bd1d57ce5f5758124999b047a9f6dd_swtirj.jpg',
            ],
            [
                'name' => 'Shampoo',
                'slug' => 'shampoo',
                'description' => 'Nourishing shampoo for healthy and shiny hair.',
                'category_id' => '198896cd-7e3d-4486-9f62-5e068bfebf19', // Health & Beauty
                'stock' => 180,
                'price' => 9.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140806/movile-bg/8b7c3365ea02008105da2e15e737dc1d_b0jyln.jpg',
            ],
            [
                'name' => 'Action Figure',
                'slug' => 'action-figure',
                'description' => 'Collectible action figure from a popular movie series.',
                'category_id' => '5eea9366-8329-4519-857f-f2db3397ccb4', // Toys & Games
                'stock' => 120,
                'price' => 24.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140805/movile-bg/8af32198cf55af7c696f0d282a7cfab3_ooat1w.jpg',
            ],
            [
                'name' => 'Puzzle',
                'slug' => 'puzzle',
                'description' => '1000-piece puzzle with a beautiful landscape design.',
                'category_id' => '5eea9366-8329-4519-857f-f2db3397ccb4', // Toys & Games
                'stock' => 90,
                'price' => 14.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140804/movile-bg/679bda8a019f0ea156ea15545f4c1727_oimnpi.jpg',
            ],
            [
                'name' => 'Car Tires',
                'slug' => 'car-tires',
                'description' => 'Durable and high-performance tires for all seasons.',
                'category_id' => 'eed2b6fb-0e1f-4e36-b7ff-8f038ab0010e', // Automotive
                'stock' => 50,
                'price' => 129.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140804/movile-bg/60d3fa1190e3d2e99521f4ba52de0cba_hefcnv.jpg',
            ],
            [
                'name' => 'Car Battery',
                'slug' => 'car-battery',
                'description' => 'Long-lasting car battery with high starting power.',
                'category_id' => 'eed2b6fb-0e1f-4e36-b7ff-8f038ab0010e', // Automotive
                'stock' => 40,
                'price' => 149.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140803/movile-bg/5b63c4d639e2b128112b5a8b41f17223_k3bk5c.jpg',
            ],
            [
                'name' => 'Office Chair',
                'slug' => 'office-chair',
                'description' => 'Ergonomic office chair with lumbar support.',
                'category_id' => '2a2d2000-1cb4-48e6-ad0d-e3c7a17c38ea', // Furniture
                'stock' => 60,
                'price' => 199.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140802/movile-bg/57bae4459ef41658af58adfa29840ac8_oe1olg.jpg',
            ],
            [
                'name' => 'Dining Table',
                'slug' => 'dining-table',
                'description' => 'Modern dining table with a wooden finish.',
                'category_id' => '2a2d2000-1cb4-48e6-ad0d-e3c7a17c38ea', // Furniture
                'stock' => 20,
                'price' => 299.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140801/movile-bg/4534fdeff4204d648e286120efb1ea26_ix4pah.jpg',
            ],
            [
                'name' => 'Organic Coffee Beans',
                'slug' => 'organic-coffee-beans',
                'description' => 'Premium organic coffee beans with a rich flavor.',
                'category_id' => '0017e7c8-dc72-4377-9357-12869c8e5944', // Grocery & Gourmet Food
                'stock' => 100,
                'price' => 19.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140801/movile-bg/3ef92f7757168fa6cc22b7f502e4150a_rbybu9.jpg',
            ],
            [
                'name' => 'Gourmet Chocolate',
                'slug' => 'gourmet-chocolate',
                'description' => 'Delicious gourmet chocolate made from high-quality cocoa.',
                'category_id' => '0017e7c8-dc72-4377-9357-12869c8e5944', // Grocery & Gourmet Food
                'stock' => 150,
                'price' => 12.99,
                'image' => 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140799/movile-bg/34b55a5bf1fcbb3c78195acca38e0882_kygb6d.jpg',
            ],
            [
                'name' => 'Drone Camera',
                'slug' => 'drone-camera',
                'description' => 'Cámara dron con grabación en 4K y estabilización de imagen para tomas aéreas.',
                'category_id' => 'a01288eb-9a9c-45a2-976b-f314c4702006', // Grocery & Gourmet Food
                'stock' => 10,
                'price' => 299.99,
                'image' => 'https://res.cloudinary.com/disvwilxi/image/upload/v1723685186/inventory-ecomerce/products/file_f6lrua.jpg',
            ],
            [
                'name' => 'Gaming Laptop',
                'slug' => 'gaming-laptop',
                'description' => 'Laptop de alto rendimiento para gaming, con tarjeta gráfica NVIDIA y procesador Intel Core i7.',
                'category_id' => 'a01288eb-9a9c-45a2-976b-f314c4702006',
                'stock' => 20,
                'price' => 1199.99,
                'image' => 'https://res.cloudinary.com/disvwilxi/image/upload/v1723685611/inventory-ecomerce/products/file_vfimco.jpg',
            ],
            [
                'name' => '4K Ultra HD TV',
                'slug' => '4k-ultra-hd-tv',
                'description' => 'Televisor 4K Ultra HD con pantalla de 55 pulgadas y soporte para HDR10.',
                'category_id' => 'a01288eb-9a9c-45a2-976b-f314c4702006',
                'stock' => 15,
                'price' => 499.99,
                'image' => 'https://res.cloudinary.com/disvwilxi/image/upload/v1723685668/inventory-ecomerce/products/file_vaeizg.jpg',
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
