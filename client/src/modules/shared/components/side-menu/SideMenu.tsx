import { Logo } from "@/assets/icons/Logo";
import { sideMenuOptions } from "@/constants/side-menu-options";
import { SideMenuOption } from "./SideMenuOption";
import { SideMenuAvatar } from "./SideMenuAvatar";
import { IUser } from "@/modules/auth";
export function SideMenu({ user }: { user: IUser }) {
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

            <ul className="space-y-6 flex-1">
                {
                    sideMenuOptions.map(({ path, icon, name }, index) => {
                        return (
                            <SideMenuOption key={name + index} icon={icon} path={path} title={name} />
                        )
                    })
                }
            </ul>

            <SideMenuAvatar user={user} />
        </nav>
    )
}