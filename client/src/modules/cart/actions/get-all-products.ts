"use server"

import { IProduct } from "@/modules/product"
import axiosInstance from "@/store/axios-store"
import { loadCookie } from "@/utils/cookiesLoader"
import { isAxiosError } from "axios"
import { IAllProductsResponse } from "@/modules/cart"

export async function getAllProducts() {
    try {
        const token = await loadCookie("INV_NEXT_TOKEN")
        const { data } = await axiosInstance.get<IAllProductsResponse>('/products/all', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
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