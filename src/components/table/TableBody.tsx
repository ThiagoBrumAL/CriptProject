
import type { ReactNode } from "react"

interface TableBodyProps {
    children: ReactNode
}

export function TableBody ({ children }: TableBodyProps ) {
    return (
        <tbody className="w-full">
            { children }
        </tbody>       
    )
}
