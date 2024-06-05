import { ResponsiveBar } from "@nivo/bar";
import dayjs from "dayjs";
import ptBRlocale from "dayjs/locale/pt-br";
import { useMemo } from "react";
import { formatCurrency } from "../../utils/format-currency";
import { theme } from "../../styles/theme";

dayjs.locale(ptBRlocale)


const apiData = [
    {
        _id: {
            year: 2023,
            month: 1,
        },
        balance: 68900,
        incomes: 76343,
        expenses: 48399,
    },
    {
        _id: {
            year: 2023,
            month: 2,
        },
        balance: 68900,
        incomes: 76343,
        expenses: 48399,
    },
    {
        _id: {
            year: 2023,
            month: 3,
        },
        balance: 68900,
        incomes: 76343,
        expenses: 48399,
    },
    {
        _id: {
            year: 2023,
            month: 4,
        },
        balance: 68900,
        incomes: 76343,
        expenses: 48399,
    },
]

type ChartData = {
    month:string
    Saldo: number
    Receitas: number
    Gastos: number
}

export function FinancialEvolutionBarChart() {
    const data = useMemo<ChartData[]>(() => {
        const chartData: ChartData[] = apiData.map((item) => ({
            month: dayjs(`${item._id.year}-${item._id.month}-01`).format('MMM'),
            Saldo: item.balance,
            Receitas: item.incomes,
            Gastos: item.expenses,
        }))

        return chartData
    }, [])

    return <ResponsiveBar 
        data={data} 
        keys={['Saldo', 'Receitas','Gastos']}
        indexBy={'month'}
        groupMode="grouped"
        enableLabel={false}
        enableGridY={false}
        padding={0.2}
        axisLeft={{
            tickSize: 0,
            format: formatCurrency,
        }}
        margin={{left:80, bottom:28}}
        theme={{
            text:{
                fontFamily: 'Lexend',
                fontSize:10,
                color: theme.colors.white,
            },
            axis: {
                ticks: {
                    text: {
                        fill: theme.colors.white
                    },
                },
            },
            tooltip: {
                container: {
                    backgroundColor:theme.colors.black,
                    padding: 16,
                    color: theme.colors.white,
                    fontFamily: 'Lexend',
                    fontSize:12,
                    borderRadius: 4,
                },
            },
        }}
        valueFormat={formatCurrency}
        />
}