import { Logo } from "@/assets/icons/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <section className="auth__layout bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800">
                {children}
            </section>

        </>
    );
}