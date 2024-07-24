"use client"
import React from 'react'
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
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

const chartConfig = {
    Emails: {
      label: "Emails:",
      color: "#fff",
    },
}


const Chart = ({data}) => {
    return (
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <LineChart accessibilityLayer data={chartData} margin={{left: 12,right: 12,}}>
            <CartesianGrid vertical={false} />
            <XAxis
                dataKey="Month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line 
                dataKey="Emails"
                type="natural"
                stroke="#fff"
                strokeWidth={2}
                dot={{
                    fill: "#00ff",
                }}
                activeDot={{
                    r: 6,
            }}/>
          </LineChart>
        </ChartContainer>
      )
  }
  
  export default Chart
