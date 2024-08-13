import { Logo } from "@/assets/icons/Logo";

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
        </nav>
    )
}