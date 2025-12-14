
interface DetailProps {
    name: string;
    title: string;
}

function DetailTitle ({ title, name }: DetailProps) {
    return (
        <h1 className="bg-slate-800 py-1 px-3 rounded-md text-slate-300"> { title } <span className="font-bold">{ name }</span></h1>
    )
}

export default DetailTitle