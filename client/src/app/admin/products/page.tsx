import { getProducts, ProductTable } from "@/modules/product";
import { CustomPagination } from "@/modules/product/components/CustomPagination";
import { HeaderPage } from "@/modules/shared";

export default async function CategoriesPage({
    searchParams,
}: {
    searchParams?: {
        query?: string,
        page?: string,
    },
}) {
    const page = Number(searchParams?.page) || 1;
    const res = await getProducts(page);

    const products = res?.data;

    return (
        <div>
            <HeaderPage title="Products"
                btnTitle="Add Product"
                description="Welcome to the products dashboard"
                pathName="/admin/categories/add"
            />


            <ProductTable products={products} >
                <CustomPagination total={res.meta.last_page} initialPage={res.meta.from} />
            </ProductTable>

        </div>
    );
}
