import { IProduct } from "@/modules/product"

export interface IProductSale extends IProduct {
    quantity: number;
    subtotal: number;
}
export interface ISale {
    clientName: string
    user: string
    email: string
    user_id: string
    id: string
    products: IProductSale[]
    total: string
    createdAt: string
}


export interface ISaleResponse {
    sales: ISale[]
}