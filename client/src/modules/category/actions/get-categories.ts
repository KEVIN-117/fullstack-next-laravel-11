"use server"

import axiosInstance from "@/store/axios-store"
import { ICategoryesResponse } from "../types/get-categories-reponse";
import { isAxiosError } from "axios";

export async function getCategories() {
    try {
        const { data } = await axiosInstance.get<ICategoryesResponse>("/categories");
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