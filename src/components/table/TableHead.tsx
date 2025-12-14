import type { ReactNode } from "react";


interface TableHeadProps {
    children: ReactNode;
}

export function TableHead ({ children }: TableHeadProps) {
    return (
        <thead className="md:table-header-group hidden">
            { children }
        </thead>
    )
}
