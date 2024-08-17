"use client"
import React, { useState } from 'react'
import {BuiltWithFilter} from './Filters'
import { ScrollArea } from './ui/scroll-area'
import { Button } from './ui/button'


const FilterBar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='h-full flex flex-col items-start justify-between relative'>
      <h2 className='text-3xl font-extrabold tracking-tight p-3'>Filter</h2>
      <ScrollArea className='h-max w-[15rem] flex flex-col items-start pb-2  '>
        <BuiltWithFilter/>
        <BuiltWithFilter/>
        <BuiltWithFilter/>
        <BuiltWithFilter/>
        <BuiltWithFilter/>
      </ScrollArea>
      <Button className="w-full p-4 hover:bg-black hover:text-white rounded-none bg-yellow-400 text-black">Search</Button>
    </div>
  )
}
export default FilterBar
