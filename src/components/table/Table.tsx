import { TableWrapper } from '../../components/table/TableWrapper';
import type { Icoin } from '../../interfaces/Icoin';

interface TableProps {
    coins: Icoin[]
}

export function Table ({ coins }: TableProps) {

    const theadNames = ["Moeda", "Valor Mercado", "Preço", "Volume", "Mudança 24h"]

    return (
        <TableWrapper.Root>
            <TableWrapper.Thead>
                <TableWrapper.Tr>
                    { theadNames.map((item, index) => ( 
                        <TableWrapper.Th key={ index } name={ item }/> 
                    )) }
                </TableWrapper.Tr>
            </TableWrapper.Thead>
            <TableWrapper.Tbody>
                { coins.length > 0 ? coins.map((coin, index) => (
                    <TableWrapper.Tr key={ index }>

                        <TableWrapper.Td.TdRoot dataLabel={ theadNames[0] }>
                            <TableWrapper.Td.TdLink symbol={ coin?.symbol } name={ coin.name } link={ `/detail/${coin.id.toLowerCase()}` } />
                        </TableWrapper.Td.TdRoot>

                        <TableWrapper.Td.TdRoot dataLabel={ theadNames[1] }>
                            <TableWrapper.Td.TdDefault name={ String(coin?.formatedMarketCapUsd) } />
                        </TableWrapper.Td.TdRoot>

                        <TableWrapper.Td.TdRoot dataLabel={ theadNames[2] }>
                            <TableWrapper.Td.TdDefault name={ String(coin?.formatedPrice) } />
                        </TableWrapper.Td.TdRoot>

                        <TableWrapper.Td.TdRoot dataLabel={ theadNames[3] }>
                            <TableWrapper.Td.TdDefault name={ String(coin?.formatedVolume) } />
                        </TableWrapper.Td.TdRoot>

                        <TableWrapper.Td.TdRoot dataLabel={ theadNames[4] }>
                            <TableWrapper.Td.TdChangeHours value={ Number(coin.changePercent24Hr.slice(0,4)) }/>
                        </TableWrapper.Td.TdRoot>

                    </TableWrapper.Tr>
                )) : null}
            </TableWrapper.Tbody>
        </TableWrapper.Root>
    )
}