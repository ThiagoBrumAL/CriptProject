import { Search } from 'lucide-react';
import { useState, type FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Icoin } from '../../interfaces/Icoin';
import { InputWrapper } from '../../components/input/InputWrappe';
import { ButtonWrapper } from '../../components/button/ButtonWrapper';
import { Table } from '../../components/table/Table';
import { getAllCoins } from '../../services/api';

function Home() {
    
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [coins, setCoins] = useState<Icoin[]>([]);
    const [offset, setOffset] = useState(0);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if(input === "") return

        navigate(`/detail/${ input }`)
    }

    const handleGetMore = () => {
        if(offset === 0) {
            setOffset(10)
            return
        }

        setOffset(prev => prev + 10)
    }
    
    useEffect(() => {
        getAllCoins({ offset, coins, setCoins })
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
