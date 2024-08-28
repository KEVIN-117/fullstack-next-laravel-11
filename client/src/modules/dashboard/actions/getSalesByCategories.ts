"use server"

import { getFetcher } from "@/utils/fetchUtils"

export async function getChatSalesByCategories() {
    return await getFetcher<{
        salesByCategories: {
            name: string
            sales: string
        }[]
    }>({ url: "/sales/chart/salesByCategories" })
}