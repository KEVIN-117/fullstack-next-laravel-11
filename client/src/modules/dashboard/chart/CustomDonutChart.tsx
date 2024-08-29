"use client";
import { currencyFormatter } from '@/utils/currencyFormatter';
import { DonutChart, Legend, Title } from '@tremor/react';

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
            <div className="grid md:grid-cols-2 grid-cols-1 space-x-6 mt-5">
                <DonutChart
                    data={data}
                    category="sales"
                    index="name"
                    valueFormatter={valueFormatter}

                    className="flex-1 h-72"
                />
                <Legend
                    categories={categories}

                    className="max-w-xs"
                />
            </div>
        </div>
    );
}