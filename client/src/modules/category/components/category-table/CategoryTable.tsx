"use client";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { DeleteCategoryModal, ICategory } from "@/modules/category";
import { EyeIcon, EditIcon, DeleteIcon } from "@/assets/icons";
import { formatterDate } from "@/utils/timeFormatter";
import Link from "next/link";

export function CategoryTable({ catefories }: { catefories: ICategory[] }) {
    return (
        <div className="pt-8">
            <Table className="container" aria-label="Categories Table">
                <TableHeader>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Description</TableColumn>
                    <TableColumn>
                        Create At
                    </TableColumn>
                    <TableColumn>
                        Last Update
                    </TableColumn>
                    <TableColumn>
                        Actions
                    </TableColumn>
                </TableHeader>
                <TableBody
                    emptyContent="No categories found"
                >
                    {
                        catefories && catefories.map((category) => {
                            return (
                                <TableRow key={category.id}>
                                    <TableCell className="text-lg">
                                        {category.name}
                                    </TableCell>
                                    <TableCell>
                                        {category.description}
                                    </TableCell>
                                    <TableCell>
                                        {formatterDate(category.created_at)}
                                    </TableCell>
                                    <TableCell>
                                        {formatterDate(category.updated_at)}
                                    </TableCell>
                                    <TableCell>
                                        <div className="relative flex items-center gap-2">
                                            <Tooltip
                                                color="primary"
                                                content="Details"
                                            >
                                                <Link
                                                    href={`/admin/categories/${category.id}/details`}
                                                    className="text-lg text-primary cursor-pointer active:opacity-50">
                                                    <EyeIcon />
                                                </Link>
                                            </Tooltip>
                                            <Tooltip color="warning" content="Edit">
                                                <Link
                                                    href={`/admin/categories/${category.id}/update`}
                                                    className="text-lg text-warning cursor-pointer active:opacity-50"
                                                >
                                                    <EditIcon />
                                                </Link>
                                            </Tooltip>
                                            <DeleteCategoryModal
                                                id={category.id}
                                                name={category.name}
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}