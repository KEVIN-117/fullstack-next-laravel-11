import { Logo } from "@/assets/icons/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <section className="auth__layout">
                {children}
            </section>

        </>
    );
}