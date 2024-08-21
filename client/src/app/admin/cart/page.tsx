import { CartProductList } from '@/modules/cart'
import { HeaderPage } from '@/modules/shared'

export default function CardPage() {
    return (
        <>
            <HeaderPage
                title='Shopping cart'
                description='Add products to the shopping cart'
                pathName='/admin/cart/checkout'
                btnTitle='end sale'
            />

            <CartProductList />
        </>
    )
}