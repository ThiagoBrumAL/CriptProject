
interface TdChangeHoursProps {
    value: number;
}

export function TdChangeHours ({ value }: TdChangeHoursProps) {
    return (
        <span className={`
            ${ value <= 0 ? "text-red-600" : "text-green-500"}
        `}> 
            { value }%
        </span>
    )
}