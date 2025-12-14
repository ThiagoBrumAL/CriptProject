import type { Icoin } from "../../interfaces/Icoin";

import DetailTitle from "./detailTitle";
import DetailHeader from "./detailHeader";
import DetailTitles from "./detailTitles";
import DetailImage from "./detailImage";
import DetailDescription from "./detailDescription";

interface DetailProps {
    coin: Icoin
}

function DetailRoot ({ coin }: DetailProps){
    return (
        <div className="w-full max-w-[500px] rounded-lg p-8 bg-[#202124]">
             
            <DetailHeader>
                <DetailImage coin={ coin }/>

                <DetailTitles>
                    <DetailTitle title="Nome: " name={ coin?.name }/>
                    <DetailTitle title="Acrônimo: " name={ coin?.symbol }/>
                </DetailTitles>
            </DetailHeader>

            <section className="mt-12 flex flex-col gap-2">
                <DetailDescription desc={"Rank: "} text={ String(coin?.rank) }/>
                <DetailDescription desc={"Preço: "} text={ String(coin?.formatedPrice) }/>
                <DetailDescription desc={"Volume: "} text={ String(coin?.formatedVolume) }/>
                <DetailDescription desc={"Valor de Mercado: "} text={ String(coin?.formatedMarketCapUsd) }/>
                <DetailDescription desc={"Mudança 24h: "} text={ `${ coin?.changePercent24Hr.slice(0,4) }%` }/>
            </section>
        </div>
    )
}

export default DetailRoot