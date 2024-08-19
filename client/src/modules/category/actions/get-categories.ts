"use server"
import axiosInstance from "@/store/axios-store"
import { ICategoryesResponse } from "../types/get-categories-reponse";
import { isAxiosError } from "axios";
import { loadCookie } from "@/utils/cookiesLoader";

export async function getCategories() {
    try {
        const token = await loadCookie("INV_NEXT_TOKEN");
        const { data } = await axiosInstance.get<ICategoryesResponse>("/categories", {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        return {
            data,
            error: null
        };
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