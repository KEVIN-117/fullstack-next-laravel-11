import axiosInstance from "@/store/axios-store";
import { isAxiosError } from "axios";
import { UserResponse } from "@/modules/auth";
import { loadCookie } from "@/utils/cookiesLoader";

export async function getUser() {
    try {
        const token = await loadCookie("INV_NEXT_TOKEN");
        const { data } = await axiosInstance.get<UserResponse>("/auth/user", {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        return {
            user: data.user,
            error: null
        }

    } catch (error: any) {
        if (isAxiosError(error)) {
            return {
                user: null,
                error: error.response?.data.message
            }
        } else {
            return {
                user: null,
                error: error.message
            }
        }
    }

}