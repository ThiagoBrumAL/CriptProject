
interface DetailProps {
    desc: string;
    text: string;
}

export function DetailDescription ({ desc, text }: DetailProps) {
    return (

        <div className="max-w-[300px]">
            <p className="bg-slate-700 py-2 px-3 rounded-md text-slate-300">
                { desc } <span className="font-bold text-[1.175rem]">{ text }</span>
            </p> 
        </div>
        
    )
}

export default DetailDescription