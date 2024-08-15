import { getProducts, IProduct, ProductTable } from "@/modules/product";
import { CustomPagination } from "@/modules/product/components/CustomPagination";
import { HeaderPage } from "@/modules/shared";

export default async function ProductPage({
    searchParams,
}: {
    searchParams?: {
        query?: string,
        page?: string,
    },
}) {
    const page = Number(searchParams?.page) || 1;
    const res = await getProducts(page);

    const products = res?.data?.data as IProduct[];

    const { data, errors } = res
    const lastPage = data?.meta.last_page as number
    const from = data?.meta.from as number
    const message = errors?.message
    return (
        <div>
            <HeaderPage title="Products"
                btnTitle="Add Product"
                description="Welcome to the products dashboard"
                pathName="/admin/products/create"
                unauthenticatedMessage={message}
            />


            <ProductTable message={message} products={products} >
                <CustomPagination total={lastPage} initialPage={from} />
            </ProductTable>

        </div>
    );
}
