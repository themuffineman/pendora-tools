"use client"
import React from 'react'
import { dashOverviewData } from '../app.config'
import DashCard from '@/components/DashCard'
import Chart from '@/components/Chart'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import styles from '@/components/components.module.css'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const page = () => {
  return (
    <div className='flex flex-col items-center justify-start py-14 px-40 text-black gap-4 size-full'>
      <div className="flex items-center justify-between w-full">
        {dashOverviewData.map((data)=>(
          <DashCard title={data.title} icon={data.icon} stat={45} comparison={45}/>
        ))}
      </div>
      <div className="w-full flex items-center justify-between">
        <Tabs className="w-max bg-black" defaultValue="emailsSent">
          <TabsList className="grid w-full grid-cols-3 bg-neutral-900">
            <TabsTrigger value="emailsSent" className={`text-white font-medium ${styles.TabsTrigger}`}>
              Emails Sent
            </TabsTrigger>
            <TabsTrigger value="openRate" className={`text-white font-medium ${styles.TabsTrigger}`}>
              Open Rate
            </TabsTrigger>
            <TabsTrigger value="clickedLinks" className={`text-white font-medium ${styles.TabsTrigger}`}>
              Clicked Links
            </TabsTrigger>
          </TabsList>
          <TabsContent value="emailsSent"></TabsContent>
          <TabsContent value="openRate"></TabsContent>
          <TabsContent value="clickedLinks"></TabsContent>
        </Tabs>
        <Select>
          <SelectTrigger className="bg-neutral-900 border-none text-white w-[200px] outline-none focus:border-none focus:ring-0">
            <SelectValue placeholder="Choose Timeframe" defaultValue="today"/>
          </SelectTrigger>
          <SelectContent className=" bg-neutral-900 border-none ">
            <SelectItem className={`text-white ${styles.SelectItem}`} value="today">Today</SelectItem>
            <SelectItem className={`text-white ${styles.SelectItem}`} value="yesterday">Yesterday</SelectItem>
            <SelectItem className={`text-white ${styles.SelectItem}`} value="week">Past Week</SelectItem>
            <SelectItem className={`text-white ${styles.SelectItem}`} value="month">Last 30 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full">
        <Chart />
      </div>
      <div></div>
    </div>
  )
}

export default page