import { LoginForm } from "@/modules/auth";
import { BackgroundBeamsWithCollision } from "@/modules/shared/components/aceternity/background-beams-with-collision";


export default function LoginPage() {
    return (
        <BackgroundBeamsWithCollision className="h-screen">

            <section className="container">

                <LoginForm />

            </section>
        </BackgroundBeamsWithCollision>
    );
}