"use client"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tooltip, useDisclosure } from '@nextui-org/react'
import { DeleteIcon } from "@/assets/icons";
import { useState } from 'react'
import { deleteCAtegory } from '../../actions/delete-category';
import { toast } from 'sonner';

export function DeleteCategoryModal({ id, name }: { id: string, name: string }) {
    const [isDisabled, setIsDisabled] = useState(false)
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
    async function handleDeleteCategory() {
        setIsDisabled(true)

        const { data, error } = await deleteCAtegory(id)
        if (error) {
            setIsDisabled(false)
            toast.error(error)
            return
        }

        toast.success(data?.message)
        setIsDisabled(false)
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
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Delete Category
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    Are you sure you want to delete this category {name}?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button
                                    isDisabled={isDisabled}
                                    color="primary"
                                    onPress={handleDeleteCategory}
                                >
                                    Eliminar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}