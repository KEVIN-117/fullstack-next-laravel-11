import { ICategory } from "@/modules/category";

export interface IProduct {
    id: string;
    name: string;
    description: string;
    slug: string;
    price: string;
    category: ICategory;
    stock: number;
    image: string;
    created_at: string;
    updated_at: string;
}