"use server"

import axiosInstance from "@/store/axios-store"
import { ICategoryesResponse } from "../types/get-categories-reponse";

export async function getCategories(): Promise<ICategoryesResponse | undefined> {
    try {
        const { data } = await axiosInstance.get<ICategoryesResponse>("/categories");
        return data;
    } catch (error: any) {
        console.log(error);
        throw Error(error.response.data.message ?? "Error en el servidor")
    }
}