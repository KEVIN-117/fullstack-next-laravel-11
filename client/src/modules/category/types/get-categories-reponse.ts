import { ICategory } from "./category";

export interface ICategoryesResponse {
    mesaage: string;
    categories: ICategory[];
}

export interface ICategoryResponse {
    message: string;
    category: ICategory;
    status: number;
}