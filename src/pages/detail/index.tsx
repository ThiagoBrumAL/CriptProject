import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { type Icoin } from "../../interfaces/Icoin"
import { DetailWrapper } from "../../components/detailCoin/detailWrapper"

interface ResponseData {
    data: Icoin;
    timestamp: string;
}

interface Error {
    error?: string
}

type DataProps = ResponseData | Error

function Detail() {

    const navigate = useNavigate()
    const { cripto } = useParams()

    console.log(cripto);

    const [coin, setCoin] = useState<Icoin>()
    const [loading, setLoading] = useState<boolean>(true)

    function guardProp(data: DataProps): data is ResponseData {
        return "data" in data
    }

    useEffect(() => {
        const getCoin = async () => {
            try {
                const res = await axios.get(`https://rest.coincap.io/v3/assets/${ cripto }`, {
                    headers: {
                        Authorization: `Bearer ${ "64bd69a70cf404e6761d5ea116ab8985cac5f714f135ba738ad961852bd5fe84" }`
                    }
                })

                const data:DataProps = res.data;

                if(!guardProp(data)){
                    navigate("/")
                    return
                }

                const price = Intl.NumberFormat("en-us", {
                    style: "currency",
                    currency: "USD"
                })

                const priceCompact = Intl.NumberFormat("en-us", {
                    style: "currency",
                    currency: "USD",
                    notation: "compact"
                })
                
                const result = {
                    ...data.data,
                    formatedPrice: price.format(Number(data.data.priceUsd)),
                    formatedMarketCapUsd: priceCompact.format(Number(data.data.marketCapUsd)),
                    formatedVolume: priceCompact.format(Number(data.data.volumeUsd24Hr)),
                }

                setCoin(result)


            } catch (error) {
                console.log(error);
                navigate("/")
            }
        } 

        getCoin()
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

    return <DetailWrapper.DetailRoot coin={ coin }/>
}

export default Detail