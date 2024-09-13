import { getSale, ISale } from '@/modules/sale';
import { SaleDetails } from '@/modules/sale/components/SaleDetails';
import { HeaderPage } from '@/modules/shared'
import React from 'react'

export default async function SaleDetailsPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const res = await getSale(id);
    const sale = res.data?.sale as ISale;
    console.log(sale);
    
    return (
        <>
            <HeaderPage
                title="Sale Details"
                description="Welcome to the admin Sale details dashboard"
                pathName="/admin/sales"
                btnTitle="Back to Sales"
            />
            <SaleDetails sale={sale} />
        </>
    )
}