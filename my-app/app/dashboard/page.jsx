import React from 'react'
import { dashOverviewData } from '../app.config'
import DashCard from '@/components/DashCard'

const page = () => {
  return (
    <div className='mt-20 text-black'>
        {dashOverviewData.map((data)=>(
          <DashCard title={data.title} icon={data.icon} stat={'45%'} comparison={'45%'}/>
        ))}
    </div>
  )
}

export default page