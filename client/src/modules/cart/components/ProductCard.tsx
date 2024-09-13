"use client"

import Image from "next/image"

import { useCartStore } from "@/modules/cart";
import { IProduct } from "@/modules/product";

import { Button } from "@nextui-org/react";
import { ShoppingCart01Icon } from "hugeicons-react";
import { currencyFormatter } from "@/utils/currencyFormatter";


interface Props {
    product: IProduct;
}

export function ProductCard({ product }: Props) {
    const { addToCart } = useCartStore();
    const { name, image, price, category } = product;
    return (
        <div className="product__card">
            <img
                className="rounded-xl flex-1 h-full w-full object-cover"
                src={image}
                alt={name}
            />
            <div className="mt-auto">
                <h3 className="font-bold">{name}</h3>

                <div>
                    <p>{category.name}</p>
                    <p>Precio: {currencyFormatter(price)}</p>
                </div>
                <Button
                    startContent={<ShoppingCart01Icon />}
                    fullWidth
                    className="btn_primary"
                    onClick={() => addToCart(product)}
                >
                    Add to cart
                </Button>
            </div>
        </div>
    )
}