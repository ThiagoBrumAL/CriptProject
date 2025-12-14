import type { Icoin } from "../../interfaces/Icoin"

interface DetailProps {
    coin: Icoin;
}

export function DetailImage ({ coin }: DetailProps) {
    return (
        <img 
            className="w-[50px] h-auto hover:rotate-[360deg] hover:scale-110 transition-all duration-700"
            src={`https://assets.coincap.io/assets/icons/${ coin?.symbol.toLowerCase() }@2x.png`} 
            alt="" 
        />
    )
}

export default DetailImage
