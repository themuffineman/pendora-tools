import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/components/components.module.css'

const Dropdownlink = ({children, subUrls}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(prev => !prev)
    }
  return (
    <div className={`flex flex-col justify-between ${styles.toggle} ${isOpen? `h-[${subUrls?.length*13.25}rem]` : 'h-[1.50rem]'} overflow-y-hidden w-max`}>
        <div className='rounded-md bg-white text-black p-4 flex justify-center items-center h-5 w-auto' onClick={()=> toggle()}>
            {children}
        </div>
        <div className='flex flex-col'>
            {
                subUrls?.map((link)=>(
                    <Link href={link.url}>{link.name}</Link>
                ))
            }
        </div>
    </div>
  )
}

export default Dropdownlink