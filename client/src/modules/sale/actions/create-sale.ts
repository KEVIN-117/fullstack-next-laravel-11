"use server"

import axiosInstance from "@/store/axios-store"
import { loadCookie } from "@/utils/cookiesLoader"
import { isAxiosError } from "axios"
import { ICreateSaleResponse } from "../types/create-sale-response"
import { ICart } from "@/modules/cart"
import { IDetailsSales } from "../types/IDetailsSales"

export async function createSale(formData: FormData) {
    const card = JSON.parse(formData.get('card') as string) as ICart[]

    const details: IDetailsSales[] = card.map((item) => {
        return {
            product_id: item.id,
            productName: item.name,
            productSlug: item.slug,
            productPrice: item.price,
            quantity: item.quantity,
            subTotal: +item.quantity * +item.price,
        } as IDetailsSales
    })
    const sale = {
        clientName: formData.get("clientName"),
        userName: formData.get("userName"),
        userEmail: formData.get("userEmail"),
        user_id: formData.get("user_id"),
        total: formData.get("total"),
        details
    }

    try {
        const token = await loadCookie("INV_NEXT_TOKEN")
        const { data } = await axiosInstance.post<ICreateSaleResponse>('/sales', sale, {
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