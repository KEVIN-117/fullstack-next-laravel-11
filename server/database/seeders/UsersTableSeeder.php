<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str; // Add this line
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'John Doe',
                'email' => 'john.doe@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password123'), // Contraseña encriptada
                'remember_token' => Str::random(10), // Token para recordar la sesión
            ],
            [
                'name' => 'Jane Smith',
                'email' => 'jane.smith@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('securepassword'), // Contraseña encriptada
                'remember_token' => Str::random(10), // Token para recordar la sesión
            ],
            [
                'name' => 'Alice Johnson',
                'email' => 'alice.johnson@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('mysecretpass'), // Contraseña encriptada
                'remember_token' => Str::random(10), // Token para recordar la sesión
            ],
            [
                'name' => 'Bob Brown',
                'email' => 'bob.brown@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('anotherpassword'), // Contraseña encriptada
                'remember_token' => Str::random(10), // Token para recordar la sesión
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
