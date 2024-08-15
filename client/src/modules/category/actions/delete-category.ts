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