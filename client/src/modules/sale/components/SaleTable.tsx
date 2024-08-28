"use client";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { IProductSale, ISale } from "../types/ISale";
import { currencyFormatter } from "@/utils/currencyFormatter";
import Link from "next/link";
import { EyeIcon } from "hugeicons-react";
import { formatterDate } from "@/utils/timeFormatter";


export function SaleTable({ sales, message }: { sales: ISale[], message?: string }) {
    console.log(sales);

    return (
        <div className="pt-8">
            <Table
                isHeaderSticky
                className="container"
                aria-label="Categories Table"
                classNames={{
                    wrapper: "min-h-[60vh]"
                }}
            >
                <TableHeader>
                    <TableColumn>Client</TableColumn>
                    <TableColumn>Seller</TableColumn>
                    <TableColumn>Total</TableColumn>
                    <TableColumn>
                        Amount
                    </TableColumn>
                    <TableColumn>
                        List of Products
                    </TableColumn>
                    <TableColumn>
                        Sale Date
                    </TableColumn>
                    <TableColumn>
                        Actions
                    </TableColumn>
                </TableHeader>
                <TableBody
                    emptyContent={`No categories found or ${message && message}`}
                >
                    {
                        sales && sales.map((sale) => {
                            const { clientName, createdAt, email, id, products, total, user, user_id } = sale;
                            return (
                                <TableRow key={id}>
                                    <TableCell>
                                        {clientName}
                                    </TableCell>
                                    <TableCell>
                                        {user}
                                    </TableCell>
                                    <TableCell>
                                        {currencyFormatter(total)}
                                    </TableCell>
                                    <TableCell>
                                        {products.length}
                                    </TableCell>
                                    <TableCell className="max-w-56">
                                        {
                                            products.map((product) => product.name).join(", ")
                                        }
                                    </TableCell>
                                    <TableCell>
                                        {formatterDate(createdAt)}
                                    </TableCell>
                                    <TableCell>
                                        <div className="relative flex items-center gap-2">
                                            <Tooltip
                                                as={Button}
                                                color="primary" content="Details">
                                                <Link
                                                    href={`/admin/sales/${id}/details`}
                                                    className="text-lg text-primary cursor-pointer active:opacity-50"
                                                >
                                                    <EyeIcon />
                                                </Link>
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
