import { ICategory } from "./category";

export interface ICategoriesResponse {
    message: string;
    categories: ICategory[];
}

export interface ICategoryResponse {
    message: string;
    category: ICategory;
    status: number;
}