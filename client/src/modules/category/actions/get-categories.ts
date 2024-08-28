"use server"
import { getFetcher } from "@/utils/fetchUtils";
import { ICategoriesResponse } from "../types/get-categories-response";

export async function getCategories() {
    return await getFetcher<ICategoriesResponse>({ url: "/categories" });
}