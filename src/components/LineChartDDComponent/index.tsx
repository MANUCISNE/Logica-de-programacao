import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import {
  LineChartContainer,
  LineChartTitle,
} from './styles'
import { useState } from 'react'
import { colors } from '../../styles/colors'

type LegendEvent = {
  dataKey: string
}

interface LineChartFormat {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
  xAxis: string
  yAxis: string
  chartLines: string
}

interface IProps {
  chartData: LineChartFormat
  isLoading?: boolean
  title?: string
  backgroundColor?: string
}

export function LineChartDDComponent({
  title,
  chartData,
  backgroundColor,
}: IProps) {
  function handleOpacityLegend({ dataKey }: LegendEvent) {
    if (arrayLegend.includes(dataKey)) {
      setArrayLegend((state) => state.filter((obj) => obj !== dataKey))
    } else {
      setArrayLegend((state) => [...state, dataKey])
    }
  }

  const [arrayLegend, setArrayLegend] = useState<string[]>([])

  const { data, xAxis, yAxis, chartLines } = chartData

  function formatChartData({
    data,
    xAxis,
    yAxis,
    chartLines,
  }: LineChartFormat) {
    const formatChartData = data.map((data) => {
      return {
        xAxis: data[xAxis],
        [data[chartLines]]: data[yAxis],
      }
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = formatChartData.reduce((acc: any, current) => {
      const { xAxis, ...rest } = current
      acc[xAxis] = { ...acc[xAxis], ...rest }

      return acc
    }, {})

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const output = Object.values(result).map((obj: any, index) => {
      return { ...obj, xAxis: Object.keys(result)[index] }
    })

    return output
  }

  const lineChartData = formatChartData({ data, xAxis, yAxis, chartLines })

  let lines: string[] = []
  data.forEach((value, index) => (lines[index] = value[chartLines]))
  lines = lines.filter((line, index, array) => array.indexOf(line) === index)

  return (
    <>
      {title && <LineChartTitle>{title}</LineChartTitle>}
      <LineChartContainer backgroundColor={backgroundColor}>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart height={250} data={lineChartData}>
            {lines.length > 0 &&
              lines.map((line, index) => {
                let hide = false

                if (!arrayLegend.includes(line) && arrayLegend.length > 0) {
                  hide = true
                }

                return (
                  <Line
                    key={line}
                    dataKey={line}
                    type="monotone"
                    strokeWidth={3}
                    stroke={colors[index]}
                    dot={false}
                    hide={hide}
                  />
                )
              })}
            <CartesianGrid stroke="#377382" strokeWidth={2} />
            <XAxis dataKey={'xAxis'} />
            <YAxis />
            <Tooltip
              wrapperStyle={{
                outline: 'none',
                border: 'none',
                zIndex: 1000,
              }}
            />
            <Legend onClick={(event) => handleOpacityLegend(event)} />
          </LineChart>
        </ResponsiveContainer>
      </LineChartContainer>
    </>
  )
}
