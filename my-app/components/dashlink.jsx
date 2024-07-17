"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Accordion , AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const Dashlink = ({icon, linkName, url, subUrls}) => { 
  const pathname = usePathname()
  return (
    <Link href={url} className={`w-full ${pathname !== `/${url}` && 'hover:bg-slate-100'} h-max text-black p-2 rounded-3xl flex items-center justify-start gap-2 relative ${pathname === `/${url}`? ' ring-[1px] bg-slate-50 ring-neutral-200 ' : 'bg-white'} `}> 
      <Image
        src={`/icons/${icon}`}
        height={15}
        width={15}
        className="object-center"
      />
      <p className='text-sm text-black w-max font-medium'>{linkName}</p> 
    </Link>
  )
}

export default Dashlink