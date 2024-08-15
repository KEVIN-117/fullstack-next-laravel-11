"use server"

import axiosInstance from "@/store/axios-store"
import { isAxiosError } from "axios"
import { CreateProductResponse, ValidationFailed } from "../types/create-product-response"
import { uploadImageFromBuffer } from "../utils/imageUploader"
import { Iimage } from "../types/image"

export async function createProduct(formData: FormData) {
    try {
        const productName = formData.get("productName") as string
        const productDescription = formData.get("productDescription") as string
        const productCategory = formData.get("productCategory") as string
        const productStock = formData.get("productStock") as string
        const productPrice = formData.get("productPrice") as string
        const image = formData.get("image") as File
        const buffer = Buffer.from(await image.arrayBuffer())
        const imageURL = await uploadImageFromBuffer<Iimage>(buffer, 'products')
        const { data } = await axiosInstance.post<CreateProductResponse>("/products", {
            name: productName,
            description: productDescription,
            category_id: productCategory,
            stock: productStock,
            price: productPrice,
            image: imageURL.secure_url,
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
                errors: error.response?.data as ValidationFailed
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