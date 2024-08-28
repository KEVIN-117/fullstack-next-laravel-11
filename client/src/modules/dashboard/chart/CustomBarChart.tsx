'use client';
import { AreaChart, BarChart, Card, Title } from '@tremor/react';



const dataFormatter = (number: number) =>
    Intl.NumberFormat('us').format(number).toString();

export function CustomBarChart({ inventory }: { inventory: { category: string, stock: number }[] }) {
    const categories = inventory.map((item) => item.category);
    const data = inventory.map((item) => {
        return {
            name: item.category,
            'stock': item.stock,
        };
    });
    return (
        <div className='backdrop-blur-sm bg-stone-950/50 p-5 rounded-xl'>
            <Title>
                Inventario por categoría
            </Title>
            <BarChart
                data={data}
                index="name"
                categories={['stock']}
                colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
                onValueChange={(v) => console.log(v)}
                xAxisLabel="Categoría"
                yAxisLabel="Cantidad"
            />
        </div>
    );
}