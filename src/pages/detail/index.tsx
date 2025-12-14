import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { type Icoin } from "../../interfaces/Icoin"
import { getCoin } from "../../services/api"
import DetailRoot from "../../components/detailCoin/detailRoot"

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

    return <DetailRoot coin={ coin }/>
}

export default Detail