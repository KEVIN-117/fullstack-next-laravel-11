import React from 'react'
import { ISale } from '../types/ISale'
import { ProductCard } from '@/modules/cart';
import { currencyFormatter } from '@/utils/currencyFormatter';
import { formatterDate } from '@/utils/timeFormatter';
import { Container } from '@/modules/shared/components/Container';

export function SaleDetails({ sale }: { sale: ISale }) {
    console.log(sale);
    function saleDetail({ label, value }: { label: string, value: string }) {
        return (
            <p className="md:text-xl text-base text-white">
                <span className="font-bold">{label} </span>
                {value}
            </p>
        )
    }
    return (
        <section className="container pt-8 pb-8 space-y-4">
            <Container>
                <div className="grid grid-cols-1 gap-4 mt-4">
                    <h2 className="md:text-4xl text-base font-bold uppercase text_gradient">
                        Informacion de la Venta
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {saleDetail({ label: 'Nombre del Cliente:', value: sale.clientName })}
                        {saleDetail({ label: 'Nombre del Vendedor:', value: sale.user })}
                        {saleDetail({ label: 'Correo del Vendedor:', value: sale.email })}
                        {saleDetail({ label: 'Total de la Venta:', value: currencyFormatter(sale.total) })}
                        {saleDetail({ label: 'Fecha de la Venta:', value: formatterDate(sale.createdAt) })}
                    </div>
                </div>
            </Container>
            <Container>
                <div className="grid grid-cols-1 gap-4 mt-4">
                    <h2 className="md:text-4xl text-base font-bold uppercase text_gradient">
                        Productos de la Venta
                    </h2>
                    <div className="product__list">
                        {sale.products && sale.products.map(({ name, image, price, quantity }, index) => (
                            <div key={index} className="product__card">
                                <img
                                    className="rounded-xl flex-1 h-full w-full object-cover"
                                    src={image}
                                    alt={name}
                                />
                                <div className="mt-auto">
                                    <h3 className="font-bold">{name}</h3>
                                    <p>Precio: {currencyFormatter(price)}</p>
                                    <p>
                                        Cantidad: {quantity}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}