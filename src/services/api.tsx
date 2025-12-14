import axios from "axios";
import type { Icoin } from "../interfaces/Icoin";
import type { NavigateFunction } from "react-router-dom"; 

const yek = import.meta.env.VITE_API_KEY

const api = axios.create({
    baseURL: "https://rest.coincap.io/v3/assets"
})

interface DataGetAllProp {
    data: Icoin[];
    timestamp: number
}

interface GetAllCoinsProps {
    offset: number;
    coins: Icoin[];
    setCoins: React.Dispatch<React.SetStateAction<Icoin[]>>
}

export const getAllCoins = async ({ offset, coins, setCoins  }:GetAllCoinsProps) => {
    
        const res = await api.get(`?limit=5&offset=${ offset }`, {
            headers: {
                Authorization: `Bearer ${ yek }`
            }
        })

        const data:DataGetAllProp = await res.data;

        if(res.status === 200){

            const price = Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD"
            })

             const priceCompact = Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD",
                notation: "compact"
            })

            const formatedResult = data.data.map((item) => {
                return {
                    ...item,
                    formatedPrice: price.format(Number(item.priceUsd)),
                    formatedMarketCapUsd: priceCompact.format(Number(item.marketCapUsd)),
                    formatedVolume: priceCompact.format(Number(item.volumeUsd24Hr)),
                }
                
            })

            if(coins.length > 0){
                const listCoins = [...coins, ...formatedResult]
                setCoins(listCoins)
                return
            }
            setCoins(formatedResult)
            
        }
}

interface ResponseData {
    data: Icoin;
    timestamp: string;
}

interface Error {
    error?: string
}

type DataGetCoinProps = ResponseData | Error

interface GetCoinProps {
    cripto: string | undefined;
    setCoin: React.Dispatch<React.SetStateAction<Icoin | undefined>>
    navigate: NavigateFunction;
}

function guardProp(data: DataGetCoinProps): data is ResponseData {
    return "data" in data
}

export const getCoin = async ({ cripto, setCoin, navigate }: GetCoinProps) => {

    try {
        const res = await axios.get(`https://rest.coincap.io/v3/assets/${ cripto }`, {
            headers: {
                Authorization: `Bearer ${ yek }`
            }
        })

        const data:DataGetCoinProps = res.data;

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