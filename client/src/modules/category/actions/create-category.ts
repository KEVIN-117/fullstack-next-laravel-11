"use server"
import axiosInstance from "@/store/axios-store";
import { isAxiosError } from "axios";
import { ICreateCategoryResponse } from "../types/create";
import { revalidatePath } from "next/cache";
export async function createCategory(category: { name: string, description: string }) {
    try {
        const { data } = await axiosInstance.post<ICreateCategoryResponse>("/categories", category);
        revalidatePath("/admin/categories");
        return {
            data,
            error: null
        }
    } catch (error: any) {
        console.log(error);

        if (isAxiosError(error)) {
            return {
                data: null,
                error: error.response?.data.message,
            }
        }

        throw new Error("Error en el servidor")
    }

}