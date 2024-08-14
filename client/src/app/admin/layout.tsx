import { SideMenu } from "@/modules/shared";
import { ReactNode } from "react"
interface IProps {
    children: ReactNode
}
export default function ProviderName({ children }: IProps) {
    return (
        <main className="dashboard set-image-bg2">
            <SideMenu />
            <div className="w-full h-screen overflow-y-auto">
                {children}
            </div>
        </main>
    );
}
