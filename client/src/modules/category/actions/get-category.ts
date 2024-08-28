"use server";
import { ICategoryResponse } from "@/modules/category";
import { getFetcher } from "@/utils/fetchUtils";

export async function getCategory(id: string) {
    return await getFetcher<ICategoryResponse>({ url: `/categories` }, id)
}