"use client"
import React, { useState } from 'react'
import { Checkbox } from './ui/checkbox'
import styles from './components.module.css'   

export const BuiltWithFilter = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="w-full h-max mt-5 px-3 gap-2 flex flex-col">
        <div className='flex items-center w-full justify-between bg-neutral-900 transition p-1 rounded-md'>
            <h3>Built With</h3>
            <div className={`hover:bg-neutral-800 rounded-md ${styles.dropdownSvgTransition} p-1 r ${isOpen? styles.rotateDropdownSvg : ''}`} onClick={()=>{
                setIsOpen(prev => !prev)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
        </div>
        <div className={`gap-2 flex-col w-full ${!isOpen? 'hidden' : 'flex'}`}>
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
  )
}
