<?php

namespace Database\Seeders;

use App\Models\Sale;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SalesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sales = [
            [
                'total' => 250.75,
                'clientName' => 'Michael Johnson',
                'userName' => 'John Doe',
                'userEmail' => 'john.doe@example.com',
                'user_id' => 1,
                // 'details' => [
                //     [
                //         'product_id' => 'a01288eb-9a9c-45a2-976b-f314c4702006',
                //         'productName' => 'Smartphone',
                //         'productSlug' => 'smartphone',
                //         'productPrice' => 699.99,
                //         'quantity' => 1,
                //         'subTotal' => 699.99
                //     ],
                //     [
                //         'product_id' => '575700f7-21cb-4a5e-ad17-622bbb7b3e24',
                //         'productName' => 'Yoga Mat',
                //         'productSlug' => 'yoga-mat',
                //         'productPrice' => 29.99,
                //         'quantity' => 2,
                //         'subTotal' => 59.98
                //     ]
                // ]
            ],
            [
                'total' => 199.99,
                'clientName' => 'Sarah Parker',
                'userName' => 'Jane Smith',
                'userEmail' => 'jane.smith@example.com',
                'user_id' => 2,
                // 'details' => [
                //     [
                //         'product_id' => '2a2d2000-1cb4-48e6-ad0d-e3c7a17c38ea',
                //         'productName' => 'Office Chair',
                //         'productSlug' => 'office-chair',
                //         'productPrice' => 199.99,
                //         'quantity' => 1,
                //         'subTotal' => 199.99
                //     ]
                // ]
            ],
            [
                'total' => 899.99,
                'clientName' => 'David Lee',
                'userName' => 'Alice Johnson',
                'userEmail' => 'alice.johnson@example.com',
                'user_id' => 3,
                // 'details' => [
                //     [
                //         'product_id' => 'd143e3f2-c9d7-4eec-a5af-eb1b70f000a6',
                //         'productName' => 'Refrigerator',
                //         'productSlug' => 'refrigerator',
                //         'productPrice' => 899.99,
                //         'quantity' => 1,
                //         'subTotal' => 899.99
                //     ]
                // ]
            ],
            [
                'total' => 129.99,
                'clientName' => 'Emily Davis',
                'userName' => 'Bob Brown',
                'userEmail' => 'bob.brown@example.com',
                'user_id' => 4,
                // 'details' => [
                //     [
                //         'product_id' => '3403a971-471e-448f-8c4d-fd7318bb8a15',
                //         'productName' => 'Men\'s Jacket',
                //         'productSlug' => 'mens-jacket',
                //         'productPrice' => 129.99,
                //         'quantity' => 1,
                //         'subTotal' => 129.99
                //     ]
                // ]
            ]
        ];


        foreach ($sales as $sale) {
            Sale::create($sale);
        }
    }
}
