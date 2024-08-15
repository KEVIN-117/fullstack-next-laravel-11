"use server";
import axiosInstance from "@/store/axios-store";
import { IProductResponse } from "@/modules/product";
import { isAxiosError } from "axios";

export async function getProduct(id: string) {
    try {
        const { data } = await axiosInstance.get<IProductResponse>(`/products/${id}`);
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