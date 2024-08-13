import { SideMenu } from "@/modules/shared";
import { ReactNode } from "react"
interface IProps {
    children: ReactNode
}
export default function ProviderName({ children }: IProps) {
    return (
        <main className="dashboard">
            <SideMenu />
            <div className="w-full">
                {children}
            </div>
        </main>
    );
}
