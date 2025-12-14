interface ThProps {
    name: string;
}

export function Th ({ name }: ThProps) {
    return (
        <th className="text-center text-slate-950 py-4"> 
            { name }
        </th>
    )
}