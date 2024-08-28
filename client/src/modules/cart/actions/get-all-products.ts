"use server"

import { IProduct } from "@/modules/product"
import axiosInstance from "@/store/axios-store"
import { loadCookie } from "@/utils/cookiesLoader"
import { isAxiosError } from "axios"
import { IAllProductsResponse } from "@/modules/cart"
import { getFetcher } from "@/utils/fetchUtils"

export async function getAllProducts() {
    return await getFetcher<IAllProductsResponse>({ url: "/products/all" });
}