"use client";
import { currencyFormatter } from '@/utils/currencyFormatter';
import { Card, DonutChart, Legend, Title } from '@tremor/react';

// const sales = [
//     {
//         name: 'New York',
//         sales: 980,
//     },
//     {
//         name: 'London',
//         sales: 456,
//     },
//     {
//         name: 'Hong Kong',
//         sales: 390,
//     },
//     {
//         name: 'San Francisco',
//         sales: 240,
//     },
//     {
//         name: 'Singapore',
//         sales: 190,
//     },
// ];

const valueFormatter = (number: number) =>
    currencyFormatter(number + '');

export function CustomDonutChart({ sales }: { sales: { name: string; sales: string }[] }) {

    const data = sales.map((sale) => {
        return {
            name: sale.name,
            sales: parseInt(sale.sales),
        };
    })

    const categories = data.map((sale) => sale.name);
    return (
        <div className='backdrop-blur-sm bg-stone-950/50 p-5 rounded-xl'>
            <Title>
                Ventas por categorías
            </Title>
            <div className="flex items-center justify-center space-x-6 mt-5">
                <DonutChart
                    data={data}
                    category="sales"
                    index="name"
                    valueFormatter={valueFormatter}
                    colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                    className="flex-1 h-72"
                />
                <Legend
                    categories={categories}
                    colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                    className="max-w-xs"
                />
            </div>
        </div>
    );
}