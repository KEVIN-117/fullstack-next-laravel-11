"use server";

import axiosInstance from "@/store/axios-store";
import { deleteCookie, loadCookie } from "@/utils/cookiesLoader";
import { isAxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logout() {
    try {
        const token = await loadCookie("INV_NEXT_TOKEN");
        await axiosInstance.post("/auth/logout", {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        deleteCookie("INV_NEXT_TOKEN")
        deleteCookie("INV_NEXT_USER")
    } catch (error: any) {
        if (isAxiosError(error)) {
            return {
                data: null,
                error: error.response?.data.message,
                errors: error.response?.data as {
                    message: string
                }
            }
        }
        else {
            return {
                data: null,
                error: error.message
            }
        }
    }
    revalidatePath("/")
    redirect("/auth/login")
}