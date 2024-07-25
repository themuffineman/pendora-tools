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

const page = () => {
  return (
    <div className='flex flex-col items-center justify-start py-14 text-black gap-4 size-full'>
      <div className="flex gap-20 items-center justify-center  w-full">
        {dashOverviewData.map((data)=>(
          <DashCard title={data.title} icon={data.icon} stat={45} comparison={45}/>
        ))}
      </div>
      <div className="w-full">
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
      </div>
      <div className="w-[80%]">
        <Chart/>
      </div>
      <div></div>
    </div>
  )
}

export default page