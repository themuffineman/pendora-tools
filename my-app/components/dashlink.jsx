"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Accordion , AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const Dashlink = ({icon, linkName, url, subUrls}) => {
  const pathname = usePathname()
  return (
    <div className={`size-[80px] text-black p-2 rounded-md flex flex-col gap-1 ${pathname === `/${url}`? 'bg-slate-300' : 'bg-white'} `}> 
        {/* url should not start with '/' */}
        <Image
            src={icon}
            height={25}
            width={25}
        />
        {
          subUrls?.length < 1? 
          <Link className='text-md font-normal' href={url}>{linkName}</Link> 
          :
          <Accordion>
            <AccordionItem>
                <AccordionTrigger className='text-md font-normal'>
                  {linkName}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-1">
                  {subUrls.map((url)=>{
                    <Link href={url.url} className='text-sm font-normal'>{url.name}</Link>
                  })}
                </AccordionContent>
            </AccordionItem>
          </Accordion>
        }
    </div>
  )
}

export default Dashlink