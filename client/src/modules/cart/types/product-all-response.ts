import { IProduct } from "@/modules/product";

export interface IAllProductsResponse {
    products: IProduct[]
    message: string
    status: string
}