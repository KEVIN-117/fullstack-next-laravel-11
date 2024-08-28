"use server"

import { getFetcher } from "@/utils/fetchUtils"

export async function getInventoryData() {
    return await getFetcher<{
        inventoryData: {
            category: string
            stock: number
        }[]
    }>({ url: '/sales/chart/inventoryData' })
}