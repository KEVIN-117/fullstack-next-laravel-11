import { IUser } from "@/modules/auth";
import { SideMenu } from "@/modules/shared";
import { loadCookie } from "@/utils/cookiesLoader";
import { redirect } from "next/navigation";
import { ReactNode } from "react"
interface IProps {
    children: ReactNode
}
export default async function ProviderName({ children }: IProps) {
    const LoadUser = await loadCookie("INV_NEXT_USER");
    if (!LoadUser) {
        return redirect("/auth/login");
    }
    const user = JSON.parse(LoadUser as string) as IUser

    return (
        <main className="dashboard set-image-bg2">
            <SideMenu user={user} />
            <div className="w-full h-screen overflow-y-auto">
                {children}
            </div>
        </main>
    );
}
