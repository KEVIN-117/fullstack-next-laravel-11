"use client"
import { Button, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { toast } from 'sonner'
import { createCategory } from '../actions/create-category'

export function CreateCategory() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        const { categoryName, categoryDescription } = event.target as HTMLFormElement

        const category = {
            name: categoryName.value as string,
            description: categoryDescription.value as string
        }
        if (categoryName.value.trim() === '' || categoryDescription.value.trim() === '') {
            setIsLoading(false)
            toast.error('All fields are required')
            return
        }

        const { data, error } = await createCategory(category)
        if (error) {
            toast.error(error)
            setIsLoading(false)
            return
        }

        toast.success(`${data?.message} with name ${data?.category.name}`)
        setIsLoading(false)
        router.push('/admin/categories')
    }


    return (
        <section className='pt-8'>
            <form onSubmit={handleSubmit} className='container space-y-4'>
                <Input
                    isRequired
                    name='categoryName'
                    label='Name'
                    placeholder='Enter category name'
                />
                <Input
                    isRequired
                    name='categoryDescription'
                    label='Description'
                    placeholder='Enter category description'
                />
                <div className='flex gap-5'>
                    <Button
                        type='submit'
                        color='primary'
                        variant='shadow'
                        isLoading={isLoading}
                    >
                        Create Category
                    </Button>
                    <Button
                        color='danger'
                        variant='shadow'
                        onPress={() => {
                            router.push('/admin/categories')
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </section>
    )
}

