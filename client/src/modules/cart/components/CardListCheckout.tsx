"use client";
import { Button } from "@nextui-org/react";
import { useCartStore } from "../store/cart.store";
import { Add01Icon, Delete01Icon, Remove01Icon } from "hugeicons-react";

export function CardListCheckout() {
    const { cart, decrement, increment, deleteToCard } = useCartStore()

    return (
        <div className="col-span-2">
            {
                cart.length === 0 && (
                    <div className="text-center flex flex-col bg-stone-900 px-3 py-4 gap-4 items-center rounded-lg">
                        <h2 className="text-2xl font-bold">Carrito de compras</h2>
                        <p>No hay productos en el carrito</p>
                    </div>
                )
            }
            <ul className="space-y-6">
                {
                    cart.length > 0 && cart.map(({ id, image, name, price, quantity }) => {
                        return (
                            <li key={id} className="cart__item">
                                <img
                                    src={image}
                                    width={100}
                                    height={100}
                                    alt={name}
                                />

                                <div className="space-y-2">
                                    <h4>Nombre: {name}</h4>
                                    <p>Precio: {price}</p>
                                    <div className="flex gap-2 items-center">

                                        {/* RESTAR */}
                                        <Button
                                            startContent={<Remove01Icon />}
                                            isIconOnly
                                            size="sm"
                                            radius="full"
                                            color="warning"
                                            onClick={() => { decrement(id) }}
                                        />

                                        {/* CANTIDAD */}
                                        <p>Cantidad: {quantity}</p>

                                        {/* INCREMENTAR */}
                                        <Button
                                            startContent={<Add01Icon />}
                                            isIconOnly
                                            size="sm"
                                            radius="full"
                                            color="success"
                                            onClick={() => { increment(id) }}
                                        />

                                        {/* ELIMINAR */}
                                        <Button
                                            startContent={<Delete01Icon size={18} />}
                                            isIconOnly
                                            color="danger"
                                            size="sm"
                                            radius="full"
                                            onClick={() => deleteToCard(id)}
                                        />
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}