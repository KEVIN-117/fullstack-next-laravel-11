"use server";
import axiosInstance from "@/store/axios-store";
import { IProductResponse } from "@/modules/product";
import { isAxiosError } from "axios";
import { loadCookie } from "@/utils/cookiesLoader";
import { getFetcher } from "@/utils/fetchUtils";

export async function getProduct(id: string) {
    return await getFetcher<IProductResponse>({ url: `/products` }, id)
}