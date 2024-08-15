"use server";

import axiosInstance from "@/store/axios-store";
import { IProductResponsePagination } from "@/modules/product";
import { isAxiosError } from "axios";

export async function getProducts(page: number) {
    try {

        const { data } = await axiosInstance.get<IProductResponsePagination>(`/products?page=${page}`);
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