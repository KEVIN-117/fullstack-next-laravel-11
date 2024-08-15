import { IProduct } from "./product";

export interface CreateProductResponse {
    message: string;
    product: IProduct;
    status: number
}

export interface ValidationFailed {
    message: string,
    errors: {
        name?: string[],
        description?: string[],
        price?: string[],
        category_id?: string[],
        stock?: string[],
        image?: string[]
    },
    status: number
}