"use server"
import axios from "@/store/axios-store";
import { isAxiosError } from "axios";
import { ICategoryResponse } from "@/modules/category";

export async function getCategory(id: string) {
    try {
        const { data } = await axios.get<ICategoryResponse>(`/categories/${id}`);
        return {
            data,
            error: null
        }
    } catch (error) {
        console.error(error);

        if (isAxiosError(error)) {
            return {
                data: null,
                error: error.response?.data.message
            }
        }

        throw new Error("Error en el servidor");

    }
}