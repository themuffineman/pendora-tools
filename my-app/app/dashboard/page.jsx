"use client"
import React from 'react'
import { dashOverviewData } from '../app.config'
import DashCard from '@/components/DashCard'
import Chart from '@/components/Chart'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-start py-14 text-black gap-4 size-full'>
      <div className="flex gap-4 items-center">
        {dashOverviewData.map((data)=>(
          <DashCard title={data.title} icon={data.icon} stat={45} comparison={45}/>
        ))}
      </div>
      <div className="w-1/2">
        <Chart/>
      </div>
      <div></div>
    </div>
  )
}

export default page