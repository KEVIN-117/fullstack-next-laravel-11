import { currencyFormatter } from "@/utils/currencyFormatter";
import { IProduct } from "../../";
import { Card, CardFooter, Image, Button, Divider } from "@nextui-org/react";
import Link from "next/link";
import { HeartAddIcon, ShoppingCartAdd01Icon } from "hugeicons-react";


export function ProductDetail({ product }: { product: IProduct }) {
    console.log(product);

    return (
        <div className="pt-8 pb-8">
            <section className="container rounded-lg p-8 backdrop-blur-sm bg-stone-950/90">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-content-stretch">
                    <Image

                        className="w-[100%] mx-auto shadow-xl rounded-xl object-scale-down shadow-indigo-900"
                        src={product.image}
                        alt={product.name}
                    />
                    <div className={`rounded-xl`}
                        style={{ backgroundImage: `url(${product.image})` }}
                    >
                        <div className="rounded-xl flex w-full h-full flex-col gap-4 justify-between md:items-center p-5 backdrop-blur-xl bg-stone-950/90 space-y-10">
                            <div className="flex justify-center items-center bg-slate-950/50 w-full p-2 rounded-lg">
                                <h2 className="text-center text-xl font-extrabold text-primary-100 sm:text-3xl">
                                    {product.name}
                                </h2>

                            </div>
                            <div className="flex justify-center items-center bg-slate-950/50 w-full p-2 rounded-lg">
                                <h2 className="text-center text-xl font-extrabold text-primary-100 sm:text-3xl">
                                    {currencyFormatter(product.price)}
                                </h2>
                            </div>
                            <div className="flex justify-between items-center gap-2 mt-2 sm:mt-0 bg-slate-950/50 w-full p-10 rounded-lg">
                                <div className="flex items-center gap-1">
                                    <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                    </svg>
                                </div>
                                <p className="text-lg font-medium leading-none text-primary-100">
                                    (5.0)
                                </p>
                                <Link
                                    href="#"
                                    className="text-lg font-medium leading-none text-primary-100 underline hover:no-underline"
                                >
                                    345 Reviews
                                </Link>
                            </div>
                            <div className="flex md:flex-row flex-col gap-5 bg-slate-950/50 w-full p-10 rounded-lg">
                                <Button
                                    color="primary"
                                    className="btn_primary flex-1 md:p-0 p-3"
                                    variant="shadow"
                                >
                                    <HeartAddIcon className="w-6 h-6" />
                                    Add to favorites
                                </Button>
                                <Button
                                    color="primary"
                                    className="flex-1 md:p-0 p-3"
                                    variant="ghost"
                                >
                                    <ShoppingCartAdd01Icon className="w-6 h-6" />
                                    Add to cart
                                </Button>
                            </div>
                            <Divider className="my-6" />
                            <p className="mb-6 bg-slate-950/50 w-full p-10 rounded-lg">
                                {product.description}
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
