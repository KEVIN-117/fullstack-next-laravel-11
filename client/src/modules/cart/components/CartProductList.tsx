import { getProduct, getProducts } from "@/modules/product"
import { getAllProducts, ProductCard } from "@/modules/cart"

export async function CartProductList() {
    const { data } = await getAllProducts()
    return (
        <section className='py-8'>
            <div className="container  rounded-lg p-8 backdrop-blur-sm bg-stone-950/90">
                <ul className='product__list'>
                    {
                        data!.products.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))

                    }
                </ul>
            </div>
        </section>
    )
}