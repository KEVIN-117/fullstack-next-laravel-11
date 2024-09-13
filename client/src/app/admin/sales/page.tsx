import { ISale } from '@/modules/sale';
import { getSales } from '@/modules/sale';
import { SaleTable } from '@/modules/sale/components/SaleTable'
import { HeaderPage } from '@/modules/shared'
import React from 'react'

export default async function SalesPage() {
    const res = await getSales();
    const { data } = res;
    const sales = data?.sales as ISale[];
    return (
        <div>
            <HeaderPage
                title="Sales"
                btnTitle="Generate Sale"
                description="Welcome to the sales dashboard List"
                pathName="/admin/sales/create"
            />

            <SaleTable sales={sales} />
        </div>
    )
}