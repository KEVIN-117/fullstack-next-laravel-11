"use server";
import axios from "axios";
import { loadCookie, } from "@/utils/cookiesLoader"



const token = loadCookie("INV_NEXT_TOKEN");

const axiosInstance = axios.create({
    baseURL: process.env.API_URL
})

export default axiosInstance;