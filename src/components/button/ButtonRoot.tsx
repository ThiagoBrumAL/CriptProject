import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function ButtonRoot ({ children, ...rest }: ButtonProps) {
    return (
        <button 
            className='bg-indigo-700 py-3 px-4 rounded-lg flex gap-3 items-center justify-center'
            { ...rest }
            >
                { children }
        </button>
    )
}