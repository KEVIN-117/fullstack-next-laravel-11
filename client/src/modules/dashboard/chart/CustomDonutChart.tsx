"use client";
import { Card, DonutChart, Legend } from '@tremor/react';

const sales = [
    {
        name: 'New York',
        sales: 980,
    },
    {
        name: 'London',
        sales: 456,
    },
    {
        name: 'Hong Kong',
        sales: 390,
    },
    {
        name: 'San Francisco',
        sales: 240,
    },
    {
        name: 'Singapore',
        sales: 190,
    },
];

const valueFormatter = (number: number) =>
    `$ ${Intl.NumberFormat('us').format(number).toString()}`;

export function CustomDonutChart() {
    return (
        <Card className='backdrop-blur-sm bg-stone-950/50 p-5 rounded-xl'>
            <div className="flex items-center justify-center space-x-6">
                <DonutChart
                    data={sales}
                    category="sales"
                    index="name"
                    valueFormatter={valueFormatter}
                    colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                    className="flex-1 h-72"
                />
                <Legend
                    categories={['New York', 'London', 'Hong Kong', 'San Francisco', 'Singapore']}
                    colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                    className="max-w-xs"
                />
            </div>
        </Card>
    );
}