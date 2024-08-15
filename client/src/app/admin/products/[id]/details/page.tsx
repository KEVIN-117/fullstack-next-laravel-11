import { getProduct, IProduct, ProductDetail } from "@/modules/product";
import { HeaderPage } from "@/modules/shared"

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const res = await getProduct(id);
    const product = res.data?.product as IProduct;

    return (
        <div>
            <HeaderPage
                title="Product Details"
                description="Welcome to the admin Product details dashboard"
                pathName="/admin/products"
                btnTitle="Back to Products"
            />
            <ProductDetail product={product} />
        </div>
    );
}

/*

*/
