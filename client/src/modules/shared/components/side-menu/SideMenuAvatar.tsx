"use client";
import { IUser, logout } from "@/modules/auth";
import { Button, Image } from "@nextui-org/react";
import { ChartAverageIcon, AiCloud02Icon } from "hugeicons-react";
import Link from "next/link";

export function SideMenuAvatar({ user }: { user: IUser }) {

    async function handleLogout() {
        await logout()
    }

    return (
        <div className="mt-auto rounded-xl overflow-hidden bg-gradient-to-br from-primary-600 via-indigo-700 to-secondary-200">
            <div className="flex flex-col justify-center items-center w-full backdrop-blur-md bg-slate-800/50 p-2">
                < AiCloud02Icon size={100} />
                {!user && <>

                    <Button
                        as={Link}
                        href="/auth/login"
                        className="w-full mt-4"
                        variant="shadow"
                        color="primary"
                        fullWidth
                    >
                        Iniciar Sesión
                    </Button>
                </>}

                {
                    user && <>
                        <h3>{user.name}</h3>
                        <p className='text-sm'>{user.email}</p>
                        <Button
                            onClick={handleLogout}
                            className="w-full mt-4"
                            variant="shadow"
                            color="danger"
                            fullWidth
                        >
                            Cerrar Sesión
                        </Button>
                    </>
                }
            </div>
        </div>
    );
}
