import { Logo } from "@/assets/icons/Logo";
import { sideMenuOptions } from "@/constants/side-menu-options";
import { SideMenuOption } from "./SideMenuOption";
import { Button, Image } from "@nextui-org/react";
import logo from "../../../../assets/images/logo.png"
export function SideMenu() {
    return (
        <nav className="sidemenu">
            <div className="sidemenu__logo">
                <div className="w-full h-full flex justify-center items-center backdrop-blur-md bg-slate-800/50">
                    <Logo />
                </div>
                <h3 className="font-semibold text-xl">
                    Gesty
                </h3>
                <p className="text-sm font-light">
                    Gestiona tu Inventario
                </p>
            </div>

            <ul className="space-y-6">
                {
                    sideMenuOptions.map(({ path, icon, name }, index) => {
                        return (
                            <SideMenuOption key={name + index} icon={icon} path={path} title={name} />
                        )
                    })
                }
            </ul>

            <div className="mt-auto rounded-xl overflow-hidden bg-gradient-to-br from-primary-600 via-indigo-700 to-secondary-200">
                <div className="flex flex-col justify-center items-center w-full backdrop-blur-md bg-slate-800/50 p-10">

                    <Image
                        src="/images/logo.png"
                        className="rounded-full"
                        alt="User"
                    />
                    <Button
                        className="w-full mt-4"
                        variant="shadow"
                        color="danger"
                        fullWidth
                    >
                        Cerrar Sesión
                    </Button>
                </div>
            </div>
        </nav>
    )
}