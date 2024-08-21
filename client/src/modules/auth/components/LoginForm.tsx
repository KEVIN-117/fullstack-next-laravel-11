"use client";
import { Logo } from '@/assets/icons/Logo'
import { Button, Divider, Input } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { login, ValidationFailed } from '@/modules/auth';

export function LoginForm() {
    const route = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const [errorsFound, setErrorsFound] = useState<ValidationFailed>({
        errors: {},
        message: "",
        status: 0
    })

    async function handleLogin(e: FormEvent) {
        e.preventDefault()
        setIsLoading(true)
        const { email, password } = e.target as HTMLFormElement

        if (email.value.trim() === "" || password.value.trim() === "") {
            toast.warning("Todos los campos son requeridos");
            setIsLoading(false);
            return;
        }

        const { data, error, errors } = await login(email.value, password.value)

        if (error) {
            if (errors) {
                setErrorsFound(errors as ValidationFailed)
            }
            toast.error(error)
            setIsLoading(false)
            return
        }

        toast.success(`Welcome back ${data?.user.name}`)
        setIsLoading(false)
        route.push('/admin/dashboard')
    }

    return (
        <div className='grid grid-cols-1 place-items-center'>
            <div className='login__form space-y-2'>
                <div className='flex flex-col justify-center items-center backdrop-blur-sm bg-stone-900/70 rounded-lg m-2'>
                    <Logo />
                    <h3 className='text-2xl font-bold mb-4 uppercase'>
                        Inicia Sesion en <span className='text-primary font-bold'>Next Inventory</span>
                    </h3>
                </div>
                <div className='space-y-4 rounded-lg w-full bg-stone-900 py-8 px-6 '>

                    <form onSubmit={handleLogin} className='space-y-4 overflow-hidden'>

                        <Input
                            isRequired
                            label="Correo electronico"
                            name='email'
                            id='email'
                            isInvalid={errorsFound.message != "" && errorsFound.errors && errorsFound.errors.email != null}
                            errorMessage={
                                errorsFound.message != "" && errorsFound.errors && errorsFound.errors.email && (
                                    errorsFound.errors.email.join(", ")
                                )
                            }
                        />

                        <Input
                            isRequired
                            label="Contraseña"
                            name='password'
                            id='password'
                            isInvalid={errorsFound.message != "" && errorsFound.errors && errorsFound.errors.password != null}
                            errorMessage={
                                errorsFound.message != "" && errorsFound.errors && errorsFound.errors.password && (
                                    errorsFound.errors.password.join(", ")
                                )
                            }
                        />

                        <Button
                            color='primary'
                            className='btn_primary'
                            variant='shadow'
                            fullWidth
                            type='submit'
                            isLoading={isLoading}
                        >
                            Iniciar Sesion
                        </Button>

                        <div className='w-auto flex justify-center items-center gap-4'>

                            <Divider />
                            <span className='text-sm text-light-500'>O</span>
                            <Divider />

                        </div>

                        <Button
                            href='/auth/register'
                            as={Link}
                            color='primary'
                            variant='shadow'
                            className='btn_secondary text-white'
                            fullWidth
                        >
                            Registrarse
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}