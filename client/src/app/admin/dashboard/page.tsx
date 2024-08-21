import { CustomAreaChart } from '@/modules/dashboard/chart/CustomAreaChart'
import { CustomDonutChart } from '@/modules/dashboard/chart/CustomDonutChart'
import { CustomProgressBar } from '@/modules/dashboard/chart/CustomProgressBar'
import { CustomScatterChart } from '@/modules/dashboard/chart/CustomScatterChart'
import { CustomSparkArea } from '@/modules/dashboard/chart/CustomSparkArea'
import { Button } from '@nextui-org/react'
import React from 'react'

function DashboardPage() {
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
                    <CustomDonutChart />
                    <CustomAreaChart />
                </div>
                <div className='container grid grid-cols-2 gap-5'>

                    <CustomSparkArea />
                    <CustomSparkArea />
                </div>
                <div className='container grid grid-cols-2 gap-5'>
                    <CustomScatterChart />
                    <CustomProgressBar />
                </div>
            </div>
        </div>
    )
}

export default DashboardPage