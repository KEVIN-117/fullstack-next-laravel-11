"use server";
import axiosInstance from "@/store/axios-store";
import { IProductResponse } from "@/modules/product";
import { isAxiosError } from "axios";
import { loadCookie } from "@/utils/cookiesLoader";

export async function getProduct(id: string) {
    try {
        const token = await loadCookie("INV_NEXT_TOKEN");
        const { data } = await axiosInstance.get<IProductResponse>(`/products/${id}`, {
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