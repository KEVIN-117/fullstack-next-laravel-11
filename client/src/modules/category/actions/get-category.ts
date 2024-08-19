"use server"
import axios from "@/store/axios-store";
import { isAxiosError } from "axios";
import { ICategoryResponse } from "@/modules/category";
import { loadCookie } from "@/utils/cookiesLoader";

export async function getCategory(id: string) {
    try {
        const token = await loadCookie("INV_NEXT_TOKEN");
        const { data } = await axios.get<ICategoryResponse>(`/categories/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
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