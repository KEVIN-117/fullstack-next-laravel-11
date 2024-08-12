"use client";
import { Logo } from '@/assets/icons/Logo'
import { EyeFilledIcon, EyeSlashFilledIcon } from '@/assets/icons/PasswordIcon';
import { Facebook, Github, Google } from '@/assets/icons/ProvidersLogo'
import { Button, Divider, Input } from '@nextui-org/react'
import { Select, SelectItem, SelectSection } from "@nextui-org/select";
import Link from 'next/link'
import { useState } from 'react';

const roles = [
    { key: "administrador", label: "Administrador" },
    { key: "gerente", label: "Gerente" },
    { key: "supervisor", label: "Supervisor" },
    { key: "empleado", label: "Empleado" },
];

export function RegisterForm() {

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <div className='grid grid-cols-1 place-items-center'>
            <div className='login__form space-y-2'>
                <div className='flex flex-col justify-center items-center backdrop-blur-sm bg-stone-900/70 rounded-lg m-2'>
                    <Logo />
                    <h3 className='text-2xl text-center font-bold mb-4 uppercase'>
                        Registrate en <span className='text-primary font-bold'>Next Inventory</span>
                    </h3>
                </div>
                <div className='space-y-4 rounded-lg w-full bg-stone-900 py-8 px-6 '>

                    <form className='space-y-4'>

                        <Input
                            isRequired
                            label="Nombre"
                            type='text'
                        />

                        <Input
                            isRequired
                            label="Apellido"
                            type='text'
                        />
                        <Select
                            isRequired
                            label="Rol de usuario"
                            placeholder="Selecciona un rol"
                            defaultSelectedKeys={["empleado"]}
                            className="max-w-full"
                        >
                            {roles.map((rol) => (
                                <SelectItem key={rol.key}>{rol.label}</SelectItem>
                            ))}
                        </Select>
                        <Input
                            isRequired
                            label="Correo electronico"
                            type='email'
                        />

                        <Input
                            isRequired
                            label="Telefono"
                            placeholder="Ej: 123-456-7890"
                            endContent={
                                <div className="flex items-center">
                                    <label className="sr-only" htmlFor="currency">
                                        Currency
                                    </label>
                                    <select
                                        className="outline-none border-0 bg-transparent text-default-400 text-small"
                                        id="currency"
                                        name="currency"
                                        defaultValue={"+591"}
                                    >
                                        <option
                                            value="+1"
                                            aria-label="United States"
                                        >
                                            +1
                                        </option>
                                        <option
                                            value={"+52"}
                                            aria-label="Mexico"
                                        >
                                            +52
                                        </option>
                                        <option
                                            value="+57"
                                            aria-label="Colombia"
                                        >
                                            +57
                                        </option>
                                        <option
                                            value="+51"
                                            aria-label="Boliivia"
                                        >
                                            +591
                                        </option>
                                    </select>
                                </div>
                            }
                            type="number"
                        />

                        <Input
                            isRequired
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                    {isVisible ? (
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isVisible ? "text" : "password"}
                            label="Contraseña"
                        />

                        <Button
                            type='submit'
                            color='primary'
                            className='btn_primary'
                            variant='shadow'
                            fullWidth
                        >
                            Registrarse
                        </Button>


                        <p className='text-sm text-light-500'>Ya estas registrado?</p>


                        <Button
                            href='/auth/login'
                            as={Link}
                            color='primary'
                            variant='shadow'
                            className='btn_secondary text-white'
                            fullWidth
                        >
                            Inicia Sesion
                        </Button>

                        <div className='flex justify-center items-center gap-4'>
                            <Button
                                color='primary'
                                variant='ghost'
                                className='flex-1 py-5'
                            >
                                <Facebook />
                            </Button>
                            <Button
                                color='primary'
                                variant='ghost'
                                className='flex-1 py-5'
                            >
                                <Github />
                            </Button>
                            <Button
                                color='primary'
                                variant='ghost'
                                className='flex-1 py-5'
                            >
                                <Google />
                            </Button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}