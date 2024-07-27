"use client"
import React, { useEffect, useState } from 'react'
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
import RecentCard from '@/components/RecentCard'


const page = () => {
  const [initChartData, setInitChartData] = useState({
    emailsSent: new Map([
      ['12/07/2024', 45],
      ['13/07/2024', 50],
      ['14/07/2024', 55]
    ]),
    openedEmails: new Map([
      ['12/07/2024', 30],
      ['13/07/2024', 35],
      ['14/07/2024', 40]
    ]),
    clickedLinks: new Map([
      ['12/07/2024', 15],
      ['13/07/2024', 20],
      ['14/07/2024', 25]
    ])
  })
  const [recentData, setRecentData] = useState([])
  const [modifiedChartData, setModifiedChartData] = useState()
  const [currentTab, setCurrentTab] = useState('emailsSent')
  const [timeframe, setTimeframe] = useState(0)

  function getPastDates(days){
    let dates = [];
    let currentDate = new Date();

    for (let i = 0; i < days; i++) {
      let date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      let formattedDate = formatDate(date);
      dates.push(formattedDate);
    }

    return dates;
  }

  function formatDate(date){
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function getDataForDates(emailStats, dates) {
    let data = {
      emailsSent: [],
      openedEmails: [],
      clickedLinks: []
    };
  
    dates.forEach(date => {
      data.emailsSent.push({ date: date, count: emailStats.emailsSent.get(date) || 0 });
      data.openedEmails.push({ date: date, count: emailStats.openedEmails.get(date) || 0 });
      data.clickedLinks.push({ date: date, count: emailStats.clickedLinks.get(date) || 0 });
    });
  
    return data;
  }


  useEffect(()=>{
    const pastDates = getPastDates(timeframe);
    const historicalData = getDataForDates(initChartData, pastDates);
    setModifiedChartData(currentTab === 'emailsSent'? historicalData.emailsSent : currentTab === 'openRate'? historicalData.openedEmails : historicalData.clickedLinks)
  }, [currentTab, timeframe])

  return (
    <div className={` ${styles.ScrollBar} flex flex-col items-center justify-start py-14 px-40 text-black gap-10 h-full overflow-auto w-full`}>
      <div className="flex items-center justify-between w-full">
        {dashOverviewData.map((data)=>(
          <DashCard title={data.title} icon={data.icon} stat={45} comparison={45}/>
        ))}
      </div>
      <div className="w-full h-full flex items-center justify-between">
        <Tabs className="w-max bg-black" defaultValue="emailsSent" onValueChange={(value)=> {setCurrentTab(value)}} >
          <TabsList className="grid w-full grid-cols-3 bg-neutral-900">
            <TabsTrigger value={'emailsSent'}  className={`text-white font-medium ${styles.TabsTrigger}`}>
              Emails Sent
            </TabsTrigger>
            <TabsTrigger value={'openRate'} className={`text-white font-medium ${styles.TabsTrigger}`}>
              Open Rate
            </TabsTrigger>
            <TabsTrigger value={'clickedLinks'} className={`text-white font-medium ${styles.TabsTrigger}`}>
              Clicked Links
            </TabsTrigger>
          </TabsList>
          <TabsContent value="emailsSent"></TabsContent>
          <TabsContent value="openRate"></TabsContent>
          <TabsContent value="clickedLinks"></TabsContent>
        </Tabs>
        <Select defaultValue="today" onValueChange={(value)=>{setTimeframe(value)}}>
          <SelectTrigger className="bg-neutral-900 border-none text-white w-[200px] outline-none focus:border-none focus:ring-0">
            <SelectValue placeholder="Choose Timeframe"/>
          </SelectTrigger>
          <SelectContent className=" bg-neutral-900 border-none ">
            <SelectItem className={`text-white ${styles.SelectItem}`} value={0}>Today</SelectItem>
            <SelectItem className={`text-white ${styles.SelectItem}`} value={1}>Yesterday</SelectItem>
            <SelectItem className={`text-white ${styles.SelectItem}`} value={7}>Past Week</SelectItem>
            <SelectItem className={`text-white ${styles.SelectItem}`} value={30}>Last 30 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full bg-neutral-950 hover:ring-1 hover:ring-neutral-800 p-4 py-8 pt-10 rounded-md hover:scale-[5px] transition">
        <Chart data={modifiedChartData} /> 
      </div>
      <div className="w-full hover:ring-1 hover:ring-neutral-800 rounded-md hover:scale-[5px] transition">
        <RecentCard recentTitle={'Emails Sent'}/>
      </div>
    </div>
  )
}

export default page