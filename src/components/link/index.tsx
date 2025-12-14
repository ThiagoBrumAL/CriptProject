import { Link } from "react-router-dom"

interface IParams {
    name: string;
    link: string;
}

interface IWrapperLink {
    params: IParams[]
} 

const WrapperLink = ({ params }: IWrapperLink) => {
    return (
        <>
            {params.map((element, index) => {
                return (
                    <Link 
                        key={ index } 
                        className="text-slate-200" 
                        to={ element.link }> 
                        { element.name } 
                    </Link>
                )
            })}
        </>
    )
}

export default WrapperLink