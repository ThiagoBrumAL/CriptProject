import { Link } from "react-router-dom"
import WrapperLink from "../link"

function Header (){
    return (
        <header className="w-full flex justify-between p-6">
            <h1 className="text-indigo-700 font-bold text-2xl leading-normal">
                <Link to={ "/" }>CriptoProject</Link>
            </h1>

            <div className="hidden gap-4 md:flex">
                <WrapperLink params={ [
                    { name: "Page 1", link: "Page_1" }, 
                    { name: "Page 2", link: "Page_2" },
                    { name: "Page 3", link: "Page_3" },
                    { name: "Page 4", link: "Page_4" },
                ]}/>
            </div>
        </header>
    )
}

export default Header