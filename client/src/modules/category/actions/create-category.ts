"use server"
import axiosInstance from "@/store/axios-store";
import { isAxiosError } from "axios";
import { ICreateCategoryResponse } from "../types/create";
import { revalidatePath } from "next/cache";
import { loadCookie } from "@/utils/cookiesLoader";
export async function createCategory(category: { name: string, description: string }) {
    try {
        const token = await loadCookie("INV_NEXT_TOKEN");
        const { data } = await axiosInstance.post<ICreateCategoryResponse>("/categories", category, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        revalidatePath("/admin/categories");
        return {
            data,
            error: null
        }
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

}