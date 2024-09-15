"use client"

import { useRouter } from 'next/navigation'
import { Button } from "@nextui-org/react";
import { Add01Icon, ArrowLeft01Icon } from 'hugeicons-react';
import { Vortex } from './aceternity/Vortex';



interface Props {
    title: string;
    description: string;
    btnTitle: string;
    pathName: string;
    unauthenticatedMessage?: string;
    activeBtn?: boolean
}

export function HeaderPage({ title, description, btnTitle, pathName, unauthenticatedMessage, activeBtn = true }: Props) {
    const router = useRouter();
    return (
        <section className="container mt-8 rounded-xl overflow-hidden">
            <Vortex
                backgroundColor="black"
            >
                <div className="header">
                    <>
                        <div>
                            <h1 className="text-2xl text_gradient capitalize font-bold">
                                {title}
                            </h1>
                            <p>
                                {description}
                            </p>
                        </div>
                        {activeBtn && (
                            <Button
                                color='primary'
                                className='btn_primary'
                                variant='shadow'
                                onPress={() => {
                                    router.push(pathName)
                                }}
                                isDisabled={unauthenticatedMessage?.includes("Unauthenticated") || unauthenticatedMessage === "You need to login to view this page"}
                            >
                                {btnTitle.toLowerCase().includes('back') ? (
                                    <ArrowLeft01Icon />
                                ) : (
                                    <Add01Icon />
                                )}
                                {btnTitle}
                            </Button>
                        )}
                    </>
                </div>
            </Vortex>
        </section>
    )
}