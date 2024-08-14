"use server";
import axiosInstance from "@/store/axios-store";
import { IProductResponse } from "@/modules/product";

export async function getProduct(id: string) {
    try {
        const { data } = await axiosInstance.get<IProductResponse>(`/products/${id}`);
        return data;
    } catch (error: any) {
        console.error(error);
        throw Error(error.response.data.message ?? "Error en el servidor")

    }
}