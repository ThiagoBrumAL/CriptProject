import type { Icoin } from "../../interfaces/Icoin";

import DetailHeader from "./detailHeader";
import DetailImage from "./detailImage";
import { DetailBasic } from "./detailBasic";
import { DetailChangePercent } from "./detailChangePercent";

interface DetailProps {
    coin: Icoin
}

function DetailRoot ({ coin }: DetailProps){
    return (
        <div className="w-full max-w-[500px] rounded-lg bg-slate-100 shadow-lg flex relative">
             
            <div className="bg-gradient-to-tr from-indigo-700 via-indigo-600 to-indigo-500 w-2 left-0 top-0 rounded-l-lg"></div>
            <div className="w-full p-8">
                <DetailHeader>
                    <DetailImage coin={ coin }/>

                    <div className="w-full flex flex-row justify-between">
                        <div>
                            <p className="rounded-md text-black font-bold leading-3">
                                { coin?.name }
                            </p>
                            <p className="rounded-md text-black">
                                { coin?.symbol }
                            </p>  
                        </div>
                        <p className="text-[1rem] rounded-md text-black">
                            Rank: <span className={`font-bold text-[1rem]`}>{ String(coin?.rank) }.º</span>
                        </p>
                    </div>
                    
                </DetailHeader>

                <section className="mt-12 flex flex-col gap-2">
                    <div className="w-full flex">
                        <p className="text-[1rem] rounded-md text-black">
                            <span className={`font-bold text-[1.6rem]`}>R{ String(coin?.formatedPrice)}</span>
                        </p>
                        &nbsp;
                        <DetailChangePercent value={ coin?.changePercent24Hr.slice(0,4) }/>
                    </div>

                    <hr />
                    
                    <DetailBasic desc="Volume" text={ String(coin?.formatedVolume) }/>
                    <DetailBasic desc="Valor Mercado" text={ String(coin?.formatedMarketCapUsd) }/>
                </section>
            </div>
        </div>
    )
}

export default DetailRoot