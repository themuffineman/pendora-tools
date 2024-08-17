"use client"
import React, { useState } from 'react'
import { Checkbox } from './ui/checkbox'

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='h-full w-[15rem] flex flex-col items-start'>
        <h2>Filter</h2>
        <div className="w-full mt-5 px-3 gap-2 flex flex-col">
            <div className='flex items-center w-full justify-between bg-neutral-900 transition p-1 rounded-md'>
                <h3>Built With</h3>
                <div className="hover:bg-neutral-800 rounded-md transition p-1">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </div>
            <div className='flex gap-2 flex-col w-full'>
                <div className='flex gap-1 items-center'>
                    <Checkbox id="wordpress"/>
                    <label htmlFor="wordpress">WordPress</label>
                </div>
                <div className='flex gap-1 items-center'>
                    <Checkbox id="wordpress"/>
                    <label htmlFor="wordpress">WordPress</label>
                </div>
                <div className='flex gap-1 items-center'>
                    <Checkbox id="wordpress"/>
                    <label htmlFor="wordpress">WordPress</label>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Filter
