import React from 'react'

interface IProps {
    children: React.ReactNode
}

export function Container(props: IProps) {
    return (
        <div className="rounded-lg p-8 backdrop-blur-sm bg-stone-950/90 border-2 border-indigo-900">
            {props.children}
        </div>
    )
}