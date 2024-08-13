"use client";
import Link from "next/link";
import { MenuOption } from "./types";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

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