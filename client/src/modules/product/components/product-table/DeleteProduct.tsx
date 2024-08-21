"use client"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tooltip, useDisclosure } from '@nextui-org/react'
import { DeleteIcon } from "@/assets/icons";
import React, { useState } from 'react';
import { deleteProduct } from '@/modules/product';

import { toast } from 'sonner';

export function DeleteProduct({ id, name }: { id: string, name: string }) {
    const [isDisable, setIsDisable] = useState(false)
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
    async function handleDelete() {
        setIsDisable(true)
        const { data, error } = await deleteProduct(id)
        if (error) {
            setIsDisable(false)
            toast.error(error)
            return
        }

        toast.success(data?.message)
        setIsDisable(false)
        onClose()
    }
    return (
        <>
            <Tooltip color="danger" content="Delete">
                <span
                    onClick={onOpen}
                    className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon />
                </span>
            </Tooltip>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader
                                className='flex flex-col gap-1'
                            >
                                Delete Product
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    Are you sure you want to delete this product {name}?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="shadow"
                                    onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button
                                    isLoading={isDisable}
                                    color="primary"
                                    variant='shadow'
                                    onPress={handleDelete}
                                >
                                    Delete
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>

            </Modal>
        </>
    );
}
