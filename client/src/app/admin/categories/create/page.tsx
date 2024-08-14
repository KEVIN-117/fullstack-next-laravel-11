import { CreateCategory } from '@/modules/category'
import { HeaderPage } from '@/modules/shared'
import React from 'react'

export default function CreateCategoryPage() {
    return (
        < >
            <HeaderPage
                btnTitle='Back to Categories'
                description='Welcome to the admin create category dashboard'
                pathName='/admin/categories'
                title='Create Category'
            />

            <CreateCategory />
        </>
    )
}