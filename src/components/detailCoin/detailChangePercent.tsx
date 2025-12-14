
interface DetailChangePercentProps {
    value: string;
}

export function DetailChangePercent ({ value }: DetailChangePercentProps) {

    const greenOrRed = Number(value) > 0

    return (
        <span className={`font-bold text-[1.175rem] ${ greenOrRed && "text-green-400" } text-red-500`}>
            { `${ value }%` }
        </span>
    )
}