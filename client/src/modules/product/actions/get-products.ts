"use server";

import axiosInstance from "@/store/axios-store";
import { IProductResponsePagination } from "@/modules/product";
import { isAxiosError } from "axios";
import { loadCookie } from "@/utils/cookiesLoader";
import { getFetcher } from "@/utils/fetchUtils";
import { url } from "inspector";

export async function getProducts(page: number) {
    const config = {
        url: `/products?page=${page}`,
    }
    return await getFetcher<IProductResponsePagination>(config)
}