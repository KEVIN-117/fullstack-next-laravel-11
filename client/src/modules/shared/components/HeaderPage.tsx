import { Button } from "@nextui-org/react";

interface Props {
    title: string;
    description: string;
    btnTitle: string;
    pathName: string;
}

export function HeaderPage({ title, description, btnTitle, pathName }: Props) {
    return (
        <section className="pt-8">
            <div className="header">
                <div>
                    <h1 className="text-2xl font-bold">
                        {title}
                    </h1>
                    <p>
                        {description}
                    </p>
                </div>
                <Button
                    color='primary'
                    className='btn_primary'
                    variant='shadow'
                >
                    {btnTitle}
                </Button>
            </div>
        </section>
    )
}