import React from 'react'
import Dashlink from '@/components/dashlink'
import { dashboardLinks, miscLinks } from '../app.config.js'
import styles from '@/components/components.module.css'
import Image from 'next/image.js'
import Link from 'next/link.js'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover.jsx'



const layout = ({children}) => {
  return (
    <div className="w-full h-full text-white bg-black flex">
        <div className={`w-[12rem] px-2 bg-neutral-900 h-full flex flex-col items-center justify-start gap-10 `}>
          <div className='size-[5rem] p-1 rounded-md relative'>
            <Image
              src='/athricia_logo.png'
              fill={true}
              className="max-w-full max-h-full object-cover object-center rounded-md"
            />
          </div>
          <div className="flex flex-col gap-5 w-full">
            {dashboardLinks.map((link)=>(
              <Dashlink key={link.name} icon={link.icon} url={link.url} linkName={link.name} subUrls={link.subUrls} />
            ))}    
          </div>
          <div className='flex flex-col gap-2 w-full h-max m-auto'>
            {miscLinks.map((link)=>(
              <Link href={link.url} className={`size-max text-white p-2 rounded-sm flex items-center justify-start gap-2 relative`}> 
                <Image
                  src={`/icons/${link.icon}`}
                  height={15}
                  width={15}
                  className="object-center"
                />
                <p className='text-xs text-white w-max font-normal hover:underline'>{link.name}</p> 
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full h-full flex flex-col ">
            <div className='w-full h-[5rem] px-5 flex gap-3 items-center justify-end bg-neutral-950 text-white'>
              <Popover>
                <PopoverTrigger>
                  <div className='relative hover:bg-neutral-700 transition p-2 rounded-md'>
                    <Image
                      src="/icons/bell.svg"
                      height={25}
                      width={25}
                      className="object-center relative"
                    />
                    <div className='size-2 rounded-full absolute top-[7px] left-[22px] animate-pulse bg-lime-300 ring-1 ring-black'/>
                  </div>
                </PopoverTrigger>
                <PopoverContent className='bg-neutral-950 flex flex-col p-1 border-neutral-900 w-max'>
                  <p className='p-3 text-white text-sm hover:bg-neutral-900 rounded-md w-full h-max cursor-pointer'>Get 50% off</p>
                  <p className='p-3 text-white text-sm hover:bg-neutral-900 rounded-md w-full h-max cursor-pointer'>Get 50% off</p>
                  <p className='p-3 text-white text-sm hover:bg-neutral-900 rounded-md w-full h-max cursor-pointer'>Get 50% off</p>
                </PopoverContent>
              </Popover>
              <div
                className='w-[2px] h-[50%] bg-neutral-500 rounded-md mr-2'
              />
              <div className='size-10 rounded-full flex items-center justify-center ring-[2px] ring-white relative'>
                <Image
                  src='/profile.jpeg'
                  fill={true}
                  className=" object-center rounded-full object-cover"
                />
              </div>
              <div className='flex flex-col gap-1 items-start justify-center '>
                <div className='size-max p-1 rounded-sm bg-lime-200 text-black text-[10px] font-semibold'>
                  PRO
                </div>
                <button className={`bg-neutral-800 hover:bg-neutral-900 ring-1 shadow-md shadow-black flex items-center justify-center ring-white ring-opacity-30 text-[12px] text-center p-1 px-2 text-white w-max rounded-md h-9 hover:scale-[1px] transition`} >Upgrade</button>
              </div>
            </div>
            <div>
              {children}
            </div>
        </div>
    </div>
  )
}

export default layout