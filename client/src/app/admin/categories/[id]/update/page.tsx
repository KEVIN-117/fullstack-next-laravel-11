import { getCategory, ICategory, UpdateCategory } from "@/modules/category";
import { HeaderPage } from "@/modules/shared";

export default async function UpdateCategoryPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const res = await getCategory(id);
    const category = res?.data?.category as ICategory;
    return (
        <>
            <HeaderPage
                title="Update Category"
                description="Welcome to the admin Category update dashboard"
                pathName="/admin/categories"
                btnTitle="Back to Categories"
            />

            <UpdateCategory category={category} />
        </>
    );
}
