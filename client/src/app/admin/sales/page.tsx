import { HeaderPage } from '@/modules/shared'
import React from 'react'

function SalesPage() {
    return (
        <div>
            <HeaderPage
                title="Sales"
                btnTitle="Generate Sale"
                description="Welcome to the sales dashboard List"
                pathName="/admin/sales/create"
            />
        </div>
    )
}

export default SalesPage