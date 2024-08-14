"use client"
import { SelectorIcon } from "@/assets/icons";
import { ICategory } from "@/modules/category";
import { Input, SelectItem, Select, Image, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { useState } from "react";

export function CreateProduct({ categories }: { categories: ICategory[] }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState<string>("");

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files![0])
        const image = e.target.files![0]
        const preview = URL.createObjectURL(image);
        setPreviewImage(preview);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }


    return (
        <section className="pt-8 pb-8">
            <form onSubmit={handleSubmit} className="container">
                <div className={`h-full ${previewImage !== '' ? 'flex gap-5' : ''}`}>
                    <div className="flex-1">
                        {
                            previewImage !== ''
                            && (
                                <Image
                                    className="w-[80%] mx-auto shadow-xl rounded-xl object-cover shadow-indigo-900"
                                    src={previewImage}
                                    alt="product"
                                />
                            )
                        }
                    </div>

                    <div className="flex-1 flex flex-col justify-between space-y-4">
                        <Input
                            isRequired
                            name="productName"
                            label="Name"
                            placeholder="Enter product name"
                            type="text"
                        />

                        <Input
                            isRequired
                            name="productDescription"
                            label="Description"
                            placeholder="Enter product description"
                            type="text"
                        />

                        <Select
                            isRequired
                            name="productCategory"
                            label="Category"
                            placeholder="Select a category"
                            disableSelectorIconRotation
                            selectorIcon={<SelectorIcon />}
                        >
                            {categories.map((category) => (
                                <SelectItem key={category.id} value={category.id}>
                                    {category.name}
                                </SelectItem>
                            ))}
                        </Select>

                        <Input
                            isRequired
                            name="productStock"
                            label="Stock"
                            placeholder="Enter product stock"
                            type="number"
                        />

                        <Input
                            isRequired
                            name="productPrice"
                            label="Price"
                            placeholder="Enter product price"
                            type="number"
                        />

                        <input
                            className="w-full p-2 rounded-lg bg-stone-800"
                            onChange={handleFile}
                            type="file"
                            name='image'
                            id="image"
                        />

                        <div className='flex gap-5'>
                            <Button
                                type='submit'
                                color='primary'
                                variant='shadow'
                                isLoading={isLoading}
                                fullWidth
                            >
                                Create Category
                            </Button>
                            <Button
                                color='danger'
                                variant='shadow'
                                onPress={() => {
                                    router.push('/admin/categories')
                                }}
                                fullWidth
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>

                </div>
            </form>
        </section>
    );
}