import { Search } from 'lucide-react';
import { useState, type FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import type { Icoin } from '../../interfaces/Icoin';
import { InputWrapper } from '../../components/input/InputWrappe';
import { ButtonWrapper } from '../../components/button/ButtonWrapper';
import { Table } from '../../components/table/Table';

interface DataProp {
    data: Icoin[];
    timestamp: number
}

function Home() {

    const key = import.meta.env.VITE_API_KEY
    
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [coins, setCoins] = useState<Icoin[]>([]);
    const [offset, setOffset] = useState(0);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if(input === "") return

        navigate(`/detail/${ input }`)
    }

     const getCoins = async () => {
        const res = await axios.get(`https://rest.coincap.io/v3/assets?limit=5&offset=${ offset }`, {
            headers: {
                Authorization: `Bearer ${ key }`
            }
        })

        const data:DataProp = await res.data;

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

    const handleGetMore = () => {
        if(offset === 0) {
            setOffset(10)
            return
        }

        setOffset(prev => prev + 10)
    }
    
    useEffect(() => {
        getCoins()
    }, [ offset ])


    return (
        <>
            <section className='w-full max-w-[1080px]'>
                <form className='w-full mb-6' onSubmit={handleSubmit}>
                    
                    <div className="w-full flex gap-2">        
                        <InputWrapper.Root state={ input } setState={ setInput } placeholder='Digite seu nome' type='text'/>
                        <ButtonWrapper.Root>
                            <ButtonWrapper.Icon icon={ Search }/>
                        </ButtonWrapper.Root>
                    </div>

                </form>

                <Table coins={ coins }/>
                
                <ButtonWrapper.Root onClick={ () => handleGetMore() }>
                    <ButtonWrapper.Text name="Carregar mais"/>
                    <ButtonWrapper.Icon icon={ Search }/>
                </ButtonWrapper.Root>
            </section>
        </>
    )
}

export default Home
