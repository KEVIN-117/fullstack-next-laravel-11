"use server";

import { isAxiosError } from "axios";
import { ValidationFailed, LoginResponse } from "@/modules/auth";
import axiosInstance from "@/store/axios-store";
import { saveCookie } from "@/utils/cookiesLoader"
import { revalidatePath } from "next/cache";
export async function login(email: string, password: string) {
    try {
        const { data } = await axiosInstance.post<LoginResponse>("/auth/login", {
            email,
            password
        })

        const { token, user } = data

        saveCookie("INV_NEXT_TOKEN", token)
        saveCookie("INV_NEXT_USER", JSON.stringify(user))

        revalidatePath("/")

        return {
            data,
            error: null
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            return {
                data: null,
                error: error.response?.data.message,
                errors: error.response?.data as ValidationFailed
            }
        }
        else {
            return {
                data: null,
                error: error.message
            }
        }
    }
}