import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { type Icoin } from "../../interfaces/Icoin"
import { getCoin } from "../../services/api"
import DetailRoot from "../../components/detailCoin/detailRoot"
import { ButtonWrapper } from "../../components/button/ButtonWrapper"
import { Undo2 } from "lucide-react"

function Detail() {

    const navigate = useNavigate()
    const { cripto } = useParams() 
    const [coin, setCoin] = useState<Icoin | undefined>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getCoin({ cripto, setCoin, navigate })
    }, [ ])

    useEffect(() => {
        if(coin){
            setLoading(false)
        }
    }, [coin])

    if(loading || !coin){
        return (
            <div>
                <h1 className="text-white">Carregando...</h1>
            </div>
        )
    }

    return (
        
        <>
            <DetailRoot coin={ coin }/>
            <br />
            <ButtonWrapper.Root onClick={ () => navigate("/") }>
                <ButtonWrapper.Text name="Voltar para o início"/>
                <ButtonWrapper.Icon icon={ Undo2 }/>
            </ButtonWrapper.Root>
        </>
        

    )
}

export default Detail