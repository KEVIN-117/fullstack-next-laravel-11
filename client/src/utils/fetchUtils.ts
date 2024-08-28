import axiosInstance from "@/store/axios-store"
import { loadCookie } from "./cookiesLoader"
import { isAxiosError } from "axios"

interface IProps {
    url: string,
    // cache?: RequestCache,
    // method: string,
}



export async function getFetcher<T>(config: IProps, id?: string) {
    try {
        const token = await loadCookie("INV_NEXT_TOKEN")
        const URL = id ? `${config.url}/${id}` : config.url
        const { data } = await axiosInstance.get<T>(URL, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        return {
            data,
            error: null
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            return {
                data: null,
                error: error.response?.data.message,
                errors: error.response?.data as {
                    message: string
                }
            }
        }
        else {
            return {
                data: null,
                error: error.message
            }
        }
    }
}