import { getCategories, ICategory } from '@/modules/category'
import { CreateProduct } from '@/modules/product'
import { HeaderPage } from '@/modules/shared'
import React from 'react'

export default async function CreateProductPage() {
    const res = await getCategories()
    const categories = res?.categories as ICategory[]
    return (
        <>
            <HeaderPage
                btnTitle='Back to Products'
                description='Welcome to the admin create product dashboard'
                pathName='/admin/products'
                title='Create Product'
            />

            <CreateProduct categories={categories} />
        </>
    )
}
