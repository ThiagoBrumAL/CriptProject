import type { ReactNode } from "react"

interface MainProps {
    children: ReactNode
}

function Main ({ children }: MainProps){
    return (
        <main className='flex flex-col items-center justify-center px-6'>
            { children }
        </main>
    )
}

export default Main