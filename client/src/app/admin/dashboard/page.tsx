import { getChatSalesByCategories } from '@/modules/dashboard'
import { getInventoryData } from '@/modules/dashboard/actions/getInvetoryData'
import { CustomBarChart } from '@/modules/dashboard/chart/CustomBarChart'
import { CustomDonutChart } from '@/modules/dashboard/chart/CustomDonutChart'
import { CustomProgressBar } from '@/modules/dashboard/chart/CustomProgressBar'
import { CustomScatterChart } from '@/modules/dashboard/chart/CustomScatterChart'
import { CustomSparkArea } from '@/modules/dashboard/chart/CustomSparkArea'
import { Button } from '@nextui-org/react'
import React from 'react'

export default async function DashboardPage() {
    const { data, error, errors } = await getChatSalesByCategories()
    const res = await getInventoryData()
    const sales = data?.salesByCategories || []
    const inventory = res.data?.inventoryData || []
    return (
        <div>
            <section className="container mt-8 set-image-bg rounded-xl overflow-hidden">
                <div className="header">
                    <div>
                        <h1 className="text-2xl font-bold">
                            Dashboard Page
                        </h1>
                        <p>
                            This is the dashboard page, view the charts below
                        </p>
                    </div>
                </div>
            </section>
            <div className='grid grid-cols-1 gap-5 py-10'>
                <div className='container grid grid-cols-2 gap-5'>
                    <CustomDonutChart sales={sales} />
                    <CustomBarChart inventory={inventory}/>
                </div>
            </div>
        </div>
    )
}