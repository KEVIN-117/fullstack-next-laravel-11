"use server"

import { getFetcher } from "@/utils/fetchUtils"
import { ISaleResponse } from "@/modules/sale";

export async function getSales() {
    return await getFetcher<ISaleResponse>({ url: "/sales" });
}