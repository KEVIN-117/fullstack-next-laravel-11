import { Logo } from '@/assets/icons/Logo'
import { Button, Divider, Input } from '@nextui-org/react'
import Link from 'next/link'

export const LoginForm = () => {
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

                    <form className='space-y-4 overflow-hidden'>

                        <Input
                            isRequired
                            label="Correo electronico"
                        />

                        <Input
                            isRequired
                            label="Contraseña"
                        />

                        <Button
                            color='primary'
                            className='btn_primary'
                            variant='shadow'
                            fullWidth
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