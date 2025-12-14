
interface TdDefaultProps {
    name: string;
}

export function TdDefaultProps ({ name }: TdDefaultProps) {
    return (
        <span className="text-slate-600 leading-6 text-[1rem] p-0 m-0"> { name } </span>
    )
}
