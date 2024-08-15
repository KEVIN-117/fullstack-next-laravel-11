"use client"
import { SelectorIcon } from "@/assets/icons";
import { ICategory } from "@/modules/category";
import { Input, SelectItem, Select, Image, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { useState } from "react";
import { createProduct } from "../actions/create-product";
import { toast } from "sonner";
import { ValidationFailed } from "../types/create-product-response";

export function CreateProduct({ categories }: { categories: ICategory[] }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState<string>("");
    const [errorsFound, setErrorsFound] = useState<ValidationFailed>({
        errors: {},
        message: "",
        status: 0
    })

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        const image = e.target.files![0]
        const preview = URL.createObjectURL(image);
        setPreviewImage(preview);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true)
        const { productName, productDescription, productCategory, productStock, productPrice, image } = event.target as HTMLFormElement
        const formData = new FormData();

        if (productName.value.trim() === '' || productDescription.value.trim() === ''
            || !image.files
            || productCategory.value.trim() === ''
            || productStock.value.trim() === '') {
            setIsLoading(false)
            toast.error('All fields are required')
            return
        }

        formData.append('productName', productName.value)
        formData.append('productDescription', productDescription.value)
        formData.append('productCategory', productCategory.value)
        formData.append('productStock', productStock.value)
        formData.append('productPrice', productPrice.value)
        formData.append('image', image.files[0])

        const { data, error, errors } = await createProduct(formData)


        if (error) {
            if (errors) {
                setErrorsFound(errors as ValidationFailed)
            }
            toast.error(error)
            setIsLoading(false)
            return
        }

        toast.success(`${data?.message} with name ${data?.product.name}`)
        setIsLoading(false)
        router.push('/admin/products')

    }


    return (
        <section className="pt-8 pb-8">
            <form onSubmit={handleSubmit} className="container rounded-lg p-8 backdrop-blur-sm bg-stone-950/90">
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
                            variant="bordered"
                            isInvalid={errorsFound.message != "" && errorsFound.errors && errorsFound.errors.name != null}
                            errorMessage={
                                errorsFound.message != "" && errorsFound.errors && errorsFound.errors.name && (
                                    errorsFound.errors.name.join(", ")
                                )
                            }
                        />

                        <Input
                            isRequired
                            name="productDescription"
                            label="Description"
                            placeholder="Enter product description"
                            type="text"
                            variant="bordered"
                            isInvalid={errorsFound.message != "" && errorsFound.errors && errorsFound.errors.description != null}
                            errorMessage={
                                errorsFound.message != "" && errorsFound.errors && errorsFound.errors.description && (
                                    errorsFound.errors.description.join(", ")
                                )
                            }
                        />

                        <Select
                            isRequired
                            name="productCategory"
                            label="Category"
                            placeholder="Select a category"
                            disableSelectorIconRotation
                            selectorIcon={<SelectorIcon />}
                            variant="bordered"
                            isInvalid={errorsFound.message != "" && errorsFound.errors && errorsFound.errors.category_id != null}
                            errorMessage={
                                errorsFound.message != "" && errorsFound.errors && errorsFound.errors.category_id && (
                                    errorsFound.errors.category_id.join(", ")
                                )
                            }
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
                            variant="bordered"
                            isInvalid={errorsFound.message != "" && errorsFound.errors && errorsFound.errors.stock != null}
                            errorMessage={
                                errorsFound.message != "" && errorsFound.errors && errorsFound.errors.stock && (
                                    errorsFound.errors.stock.join(", ")
                                )
                            }
                        />

                        <Input
                            isRequired
                            name="productPrice"
                            label="Price"
                            placeholder="Enter product price"
                            type="number"
                            variant="bordered"
                            isInvalid={errorsFound.message != "" && errorsFound.errors && errorsFound.errors.price != null}
                            errorMessage={
                                errorsFound.message != "" && errorsFound.errors && errorsFound.errors.price && (
                                    errorsFound.errors.price.join(", ")
                                )
                            }
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
                                Create Product
                            </Button>
                            <Button
                                color='danger'
                                variant='shadow'
                                onPress={() => {
                                    router.push('/admin/products')
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