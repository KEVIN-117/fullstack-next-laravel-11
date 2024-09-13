"use server"

import { getFetcher } from "@/utils/fetchUtils"
import { ISale } from "../types/ISale"

export async function getSale(id: string) {
    return await getFetcher<{
        sale: ISale
    }>({
        url: `/sales/${id}`
    })
}