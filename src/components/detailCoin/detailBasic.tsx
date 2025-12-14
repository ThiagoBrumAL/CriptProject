
interface DetailBasicProps {
    desc: string;
    text: string;
}

export function DetailBasic ({ desc, text }: DetailBasicProps) {
    return (
        <p className="text-[1rem] rounded-md text-black">
            { desc }: <span className={`font-bold text-[1.275rem]`}>{ text }</span>
        </p>
    )
}

