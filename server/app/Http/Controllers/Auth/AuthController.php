<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\Auth\UserResouce;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $credentyals = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required|string|min:6'
        ]);

        if ($credentyals->fails()) {
            return response()->json([
                "message" => "Validation failed",
                "errors" => $credentyals->errors(),
                "status" => 400
            ], 400);
        }

        $credentyals = $request->all();

        if (!Auth::attempt($credentyals)) {
            return response()->json([
                "message" => "Invalid credentials",
                "status" => 401
            ], 401);
        }

        $user = User::find(Auth::user()->id);

        $token = $user->createToken('token')->plainTextToken;
        return response()->json([
            "message" => "User logged in successfully",
            "user" => new UserResouce($user),
            "token" => $token,
            "status" => 200
        ], 200);
    }

    public function register()
    {

    }

    public function logout(Request $request)
    {
        $user = $request->user();

        $user->currentAccessToken()->delete();

        return response()->json([
            "message" => "User logged out successfully",
            "status" => 200
        ], 200);

    }

    public function checkToken(Request $request)
    {
        $user = $request->user();

        return response()->json([
            "message" => "Token is valid",
            "user" => new UserResouce($user),
            "status" => 200
        ], 200);

    }
}
