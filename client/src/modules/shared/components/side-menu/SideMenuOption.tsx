"use client";
import { MenuOption } from "./types";
import { usePathname, useRouter } from "next/navigation";

export function SideMenuOption({ path, title, icon }: MenuOption) {
    const router = useRouter();
    const pathName = usePathname();
    return (
        <li
            className={`sidemenu__link ${pathName.includes(path) ? "sidemenu__link--active" : ""}`}
            onClick={() => {
                router.push(path);
            }}
        >
            <span>
                {icon}
            </span>
            {title}
        </li>
    )
}