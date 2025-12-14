import type { ReactNode } from "react";

interface TableProps {
    children: ReactNode
}

export function TableRoot ({ children }: TableProps) {

    return (
        <table 
            cellPadding={ 0 } 
            border={ 0 } 
            className='w-full border-separate m-0 p-0 table-fixed text-[1rem] border-spacing-y-2'
        >    
            { children }      
        </table>
    )
}