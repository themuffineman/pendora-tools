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
  }
  return (
      <ChartContainer config={chartConfig} className="h-[300px] w-full">
        <LineChart accessibilityLayer data={data} margin={{left: 12,right: 12,}}>
          <CartesianGrid vertical={false} />
          <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis/>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
            // wrapperClassName='bg-neutral-900'
            // labelClassName='text-white'
            
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
