import { create, StateCreator } from "zustand"
import { ICart } from "../types/cart"
import { IProduct } from "@/modules/product"
import { toast } from "sonner"

interface CardState {
    cart: ICart[],
    total: number,
}

interface Methods {
    addToCart: (product: IProduct) => void
    deleteToCard: (id: string) => void
    increment: (id: string) => void
    decrement: (id: string) => void
    clearCart: () => void
    calculateTotal: () => void
}

const storeApi: StateCreator<CardState & Methods> = (set, get) => ({
    cart: [],
    total: 0,

    calculateTotal: () => {
        const { cart, calculateTotal } = get()
        let subTotal = 0;

        cart.forEach(item => {
            subTotal += +item.price * item.quantity
        })

        set({
            total: subTotal
        })
    },
    addToCart: (product: IProduct) => {
        const { cart, calculateTotal } = get()

        const exist = cart.some(item => item.id === product.id)

        if (exist) {
            toast.warning('This product is already in the cart')
            return
        }

        set({
            cart: [
                ...cart,
                {
                    id: product.id,
                    image: product.image,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    slug: product.slug
                }
            ]
        })

        toast.success('Product added to cart')
        calculateTotal()

    },

    clearCart: () => {
        set({
            cart: [],
            total: 0
        })
    },
    decrement: (id: string) => {
        const { cart, calculateTotal } = get()

        const update = cart.map(item => {
            if (item.quantity === 1) {
                return item
            }
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }

            return item
        })

        set({
            cart: update
        })

        calculateTotal()
    },
    increment: (id: string) => {
        const { cart, calculateTotal } = get()
        const update = cart.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }

            return item
        })

        set({
            cart: update
        })

        calculateTotal()
    },

    deleteToCard: (id: string) => {
        const { cart, calculateTotal } = get()

        const update = cart.filter(item => item.id !== id)

        set({
            cart: update
        })
        calculateTotal()
    }
})

export const useCartStore = create<CardState & Methods>()(
    storeApi
)