
interface ButtonTextProps {
    name: string
}

export function ButtonText ({ name }: ButtonTextProps) {
    return (
        <span className="text-slate-50 font-bold text-[1rem] leading-6">{ name }</span>
    )
}