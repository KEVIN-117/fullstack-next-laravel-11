import { CategoryTable, getCategories, ICategory } from "@/modules/category";
import { HeaderPage } from "@/modules/shared";

export default async function CategoriesPage() {

    const response = await getCategories();
    const categories = response?.categories as ICategory[];

    return (
        <div>
            <HeaderPage title="Categories"
                btnTitle="Add Category"
                description="Welcome to the admin Categories dashboard"
                pathName="/admin/categories/create"
            />
            <CategoryTable catefories={categories} />
        </div>
    );
}
