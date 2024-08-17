"use client"
import React, { useState } from 'react'
import {BuiltWithFilter} from './Filters'


const FilterBar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='h-full w-[15rem] flex flex-col items-start overflow-y-auto'>
        <h2>FilterBar</h2>
        <BuiltWithFilter/>
        <BuiltWithFilter/>
        <BuiltWithFilter/>
        <BuiltWithFilter/>
        <BuiltWithFilter/>
    </div>
  )
}
export default FilterBar
