import { getAllProducts, ProductCard } from "@/modules/cart"
import { getCategories, ICategoriesResponse } from "@/modules/category"
import { Container } from "@/modules/shared/components/Container"
import { Button } from "@nextui-org/react"

export async function CartProductList() {
    const { data } = await getAllProducts()
    const { data: dataCategories } = await getCategories()

    const { categories } = dataCategories as ICategoriesResponse
    return (
        <section className='py-8'>
            <div className="container space-y-4">
                <Container >
                    <div className="flex gap-3">
                        {
                            categories.map(category => (
                                <Button
                                    key={category.id}
                                    color='primary'
                                    className='btn_primary'
                                    variant='shadow'
                                >
                                    {category.name}
                                </Button>
                            ))
                        }
                    </div>
                </Container>
                <Container >
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
                </Container>
            </div>
        </section>
    )
}