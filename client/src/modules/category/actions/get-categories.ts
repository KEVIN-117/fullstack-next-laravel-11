"use server"

import axiosInstance from "@/store/axios-store"
import { ICategoryResponse } from "../types/get-categories-reponse";

export async function getCategories(): Promise<ICategoryResponse | undefined> {
    try {
        const { data } = await axiosInstance.get<ICategoryResponse>("/categories");
        return data;
    } catch (error) {

    }
}