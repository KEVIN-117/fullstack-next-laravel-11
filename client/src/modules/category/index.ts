export { CategoryTable } from "@/modules/category/components/category-table/CategoryTable";
export { CreateCategory } from "@/modules/category/components/CreateCategory";
export { UpdateCategory } from "@/modules/category/components/UpdateCategory";
export { DeleteCategoryModal } from "@/modules/category/components/category-table/DeleteCategoryModal";

export type { ICategory } from "@/modules/category/types/category";
export type { ICategoryesResponse, ICategoryResponse } from "@/modules/category/types/get-categories-reponse";
export type { ICreateCategoryResponse } from "@/modules/category/types/create";



export { getCategories } from "@/modules/category/actions/get-categories";
export { getCategory } from "@/modules/category/actions/get-category";
export { createCategory } from "@/modules/category/actions/create-category";
export { deleteCAtegory } from "@/modules/category/actions/delete-category";