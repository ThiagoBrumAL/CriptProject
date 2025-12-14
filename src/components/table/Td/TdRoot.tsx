import type { ReactNode } from "react";

interface TdRootProps {
    children: ReactNode;
    dataLabel: string;
}

export function TdRoot ({ children, dataLabel } : TdRootProps) {

    return (
        <td
        data-label={ dataLabel.toUpperCase() }
        className={`
            w-full
            bg-slate-200
            md:p-2
            p-4 
            text-slate-950
            md:border-y-2 border-slate-300
            md:first:border-l-2 md:first:rounded-l-lg
            md:last:border-r-2 md:last:rounded-r-lg 
            md:text-center text-right
            md:table-cell
            md:before:content-['']
            before:content-[attr(data-label)]
            before:float-left
            border-b-2
            block
            font-bold
        `}>
            { children }
        </td>
    )
}