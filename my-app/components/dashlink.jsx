"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Dashlink = ({icon, linkName, url}) => {
    const pathname = usePathname()

  return (
    <div className={`size-[80px] p-2 rounded-md flex flex-col gap-1 ${pathname === `/${url}`? 'bg-slate-300' : 'bg-white'} `}> 
        {/* url should not start with '/' */}
        <Image
            src={icon}
            height={50}
            width={50}
        />
        <Link className='text-sm font-normal' href={url}>{linkName}</Link>
    </div>
  )
}

export default Dashlink