"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Accordion , AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const Dashlink = ({icon, linkName, url, subUrls}) => { 
  const pathname = usePathname()
  return (
    <Link href={url} className={`w-full ${pathname !== `/${url}` && 'hover:bg-neutral-700'} transition-colors h-max text-white p-2 pl-4 rounded-3xl flex items-center justify-start gap-2 relative ${pathname === `/${url}`? 'bg-neutral-700 ' : 'bg-transparent'} `}> 
      <Image
        src={`/icons/${icon}`}
        height={15}
        width={15}
        className="object-center stroke-white text-white"
      />
      <p className='text-xs text-white w-max font-medium'>{linkName}</p> 
    </Link>
  )
}

export default Dashlink