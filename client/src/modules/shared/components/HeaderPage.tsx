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
}

export function HeaderPage({ title, description, btnTitle, pathName, unauthenticatedMessage }: Props) {
    const router = useRouter();
    return (
        <section className="container mt-8 rounded-xl overflow-hidden">
            <Vortex
                backgroundColor="#000000"
                rangeY={800}
                particleCount={500}
                baseHue={120}
            >
                <div className="header">
                    <>
                        <div>
                            <h1 className="text-2xl font-bold">
                                {title}
                            </h1>
                            <p>
                                {description}
                            </p>
                        </div>
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
                    </>
                </div>
            </Vortex>
        </section>
    )
}