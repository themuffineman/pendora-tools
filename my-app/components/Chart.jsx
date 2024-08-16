"use client"
import React from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { Month: "January", Emails: 186 },
  { Month: "February", Emails: 305 },
  { Month: "March", Emails: 237 },
  { Month: "April", Emails: 73 },
  { Month: "May", Emails: 209 },
  { Month: "June", Emails: 214 },
]



const Chart = ({data, property}) => {
  const chartConfig = {
    count: {
      label: 'Count',
      color: "#00ff"
    },
    date: {
      label: 'Date'
    }
  }
  return (
      <ChartContainer config={chartConfig} className="h-[300px] w-full">
        <LineChart accessibilityLayer data={data} margin={{left: 12,right: 12,}}>
          <CartesianGrid vertical={false} />
          <YAxis/>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel  labelKey="count" nameKey="count" indicator={'line'} />}
          />
          <Line 
              dataKey="count"
              type="linear"
              stroke="#0000FF"
              strokeWidth={3}
              dot={false}
            />
        </LineChart>
      </ChartContainer>
  )
  }
  
  export default Chart
