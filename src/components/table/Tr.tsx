import type { ReactNode } from "react"

interface TrProps {
    children: ReactNode
}

function Tr ({ children }: TrProps) {
    return (
        <tr className="w-full">
            { children }
        </tr>
    )
}

export default Tr