import { IUser } from "@/modules/auth"
import { CardListCheckout, CheckoutForm } from "@/modules/cart"
import { HeaderPage } from "@/modules/shared"
import { loadCookie } from "@/utils/cookiesLoader"


export default async function CheckoutPage() {
    const userCookies = await loadCookie("INV_NEXT_USER")
    const user = JSON.parse(userCookies as string) as IUser
    return (
        <>
            <HeaderPage
                btnTitle="Back to cart"
                title="End your purchase"
                description="Fill in the fields below to complete your purchase"
                pathName="/admin/cart"
            />

            <section className="checkout">
                <CardListCheckout />
                <CheckoutForm user={user} />
            </section>
        </>
    )
}
