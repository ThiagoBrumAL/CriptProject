import type { ReactNode } from "react"

interface DetailProps {
    children: ReactNode
}

export function DetailHeader ({ children }: DetailProps) {
    return (
        <div className="w-full flex gap-4">
            { children }
        </div>
    )
} 

export default DetailHeader