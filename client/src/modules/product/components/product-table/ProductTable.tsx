"use client";
import { DeleteIcon, EditIcon, EyeIcon } from "@/assets/icons";
import { IProduct } from "@/modules/product";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { formatterDate } from "@/utils/timeFormatter";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export function ProductTable({ products, children, message }: { products: IProduct[], children: React.ReactNode, message?:string }) {
    return (
        <div className="pt-8">
            <Table
                isHeaderSticky
                className="container"
                aria-label="Categories Table"
                bottomContent={children}
                classNames={{
                    wrapper: "min-h-[60vh]"
                }}
            >
                <TableHeader>
                    <TableColumn>Image</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Category</TableColumn>
                    <TableColumn>
                        Price
                    </TableColumn>
                    <TableColumn>
                        Stock
                    </TableColumn>
                    <TableColumn>
                        Create At
                    </TableColumn>
                    <TableColumn>
                        Actions
                    </TableColumn>
                </TableHeader>
                <TableBody
                    emptyContent={`No categories found or ${message && message}`}
                >
                    {
                        products && products.map((product) => {
                            const { category, image, created_at, id, price, name, stock } = product;
                            return (
                                <TableRow key={id}>
                                    <TableCell>
                                        <img src={image} alt={name} className="w-12 h-12 object-cover rounded-xl" />
                                    </TableCell>
                                    <TableCell>
                                        {name}
                                    </TableCell>
                                    <TableCell>
                                        {category.name}
                                    </TableCell>
                                    <TableCell>
                                        {currencyFormatter(price)}
                                    </TableCell>
                                    <TableCell>
                                        {stock}
                                    </TableCell>
                                    <TableCell>
                                        {formatterDate(created_at)}
                                    </TableCell>
                                    <TableCell>
                                        <div className="relative flex items-center gap-2">
                                            <Tooltip
                                                as={Button}
                                                color="primary" content="Details">
                                                <Link
                                                    href={`/admin/products/${id}/details`}
                                                    className="text-lg text-primary cursor-pointer active:opacity-50"
                                                >
                                                    <EyeIcon />
                                                </Link>
                                            </Tooltip>
                                            <Tooltip color="warning" content="Edit">
                                                <span className="text-lg text-warning cursor-pointer active:opacity-50">
                                                    <EditIcon />
                                                </span>
                                            </Tooltip>
                                            <Tooltip color="danger" content="Delete">
                                                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                                    <DeleteIcon />
                                                </span>
                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    );
}