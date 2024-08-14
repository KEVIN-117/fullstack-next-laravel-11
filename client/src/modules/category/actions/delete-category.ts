"use server"

import axiosInstance from "@/store/axios-store";
import { isAxiosError } from "axios";
import { revalidatePath } from "next/cache";

export async function deleteCAtegory(id: string) {
    try {
        const { data } = await axiosInstance.delete<{ message: string, status: number }>(`/categories/${id}`);
        revalidatePath("/admin/categories");
        return {
            data,
            error: null
        }
    } catch (e: any) {
        console.error(e);
        if (isAxiosError(e)) {
            return {
                data: null,
                error: e.response?.data.message
            }
        }
        throw new Error("Error en el servidor");
    }

}