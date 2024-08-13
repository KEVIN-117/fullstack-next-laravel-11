"use client";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { ICategory } from "@/modules/category";
import { EyeIcon, EditIcon, DeleteIcon } from "@/assets/icons";

function formatterDate(date: string) {
    // format example dia 1 of august of 2021
    return new Date(date).toLocaleDateString('pt-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

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
                                                as={Button}
                                                color="primary" content="Details">
                                                <span className="text-lg text-primary cursor-pointer active:opacity-50">
                                                    <EyeIcon />
                                                </span>
                                            </Tooltip>
                                            <Tooltip color="warning" content="Edit user">
                                                <span className="text-lg text-warning cursor-pointer active:opacity-50">
                                                    <EditIcon />
                                                </span>
                                            </Tooltip>
                                            <Tooltip color="danger" content="Delete user">
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
    )
}