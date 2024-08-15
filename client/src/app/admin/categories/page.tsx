import { CategoryTable, getCategories, ICategory } from "@/modules/category";
import { HeaderPage } from "@/modules/shared";

export default async function CategoriesPage() {

    const { data, errors } = await getCategories();
    const categories = data?.categories as ICategory[];
    const message = errors?.message as string
    return (
        <div>
            <HeaderPage title="Categories"
                btnTitle="Add Category"
                description="Welcome to the admin Categories dashboard"
                pathName="/admin/categories/create"
                unauthenticatedMessage={message}
            />
            <CategoryTable catefories={categories} message={message} />
        </div>
    );
}
