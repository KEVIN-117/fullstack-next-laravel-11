"use server";

import axiosInstance from "@/store/axios-store";
import { IProductResponsePagination } from "@/modules/product";

export async function getProducts(page: number) {
    try {

        const { data } = await axiosInstance.get<IProductResponsePagination>(`/products?page=${page}`);
        return data;

    } catch (error: any) {
        console.log(error);
        throw Error(error.response.data.message ?? "Error en el servidor")
    }
}