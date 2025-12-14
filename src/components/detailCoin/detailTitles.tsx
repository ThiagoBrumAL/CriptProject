import type { ReactNode } from "react"

interface DetailProps {
    children: ReactNode
}

export function DetailTitles ({ children }: DetailProps) {
    return (
        <div className="flex flex-col gap-2">
            { children }
        </div>
    )
}

export default DetailTitles