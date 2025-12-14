import { Link } from "react-router-dom";

interface TdLinkProps {
    name: string;
    link: string;
    symbol: string;
}

export function TdLink ({ name, link, symbol }: TdLinkProps) {

    const imageLink = `https://assets.coincap.io/assets/icons/${ symbol.toLowerCase() }@2x.png`

    return (
        <div className="flex gap-2 md:justify-start justify-end">
            <img
                className="md:w-[55px] w-[36px]"
                src={ imageLink } 
                alt="" 
            />
            <Link to={ link } className="flex flex-col text-left justify-center"> 
                <span className="text-slate-800 leading-6 text-[1rem] p-0 m-0">{ name }</span>
                <span className="text-slate-400 leading-3 text-[0.775rem] p-0 m-0">{ symbol }</span>
            </Link>
        </div>
    )
}
