import React from 'react'
import Dashlink from '@/components/dashlink'
import { dashboardLinks, miscLinks } from '../app.config.js'
import styles from '@/components/components.module.css'
import Image from 'next/image.js'
import Link from 'next/link.js'



const layout = ({children}) => {
  return (
    <div className="w-full h-full text-black flex">
        <div className={`w-[12rem] px-2 shadow-sm  shadow-neutral-100 h-full flex flex-col items-center justify-start gap-10 border-r-[2px] border-neutral-100 ${styles.dashShadow}`}>
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
              <Link href={link.url} className={`size-max text-black p-2 rounded-sm flex items-center justify-start gap-2 relative`}> 
                <Image
                  src={`/icons/${link.icon}`}
                  height={15}
                  width={15}
                  className="object-center"
                />
                <p className='text-sm text-black w-max font-normal hover:underline'>{link.name}</p> 
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full h-full ">
            <div className='w-full h-[4rem] px-2 flex items-center justify-end bg-neutral-800 text-white'>
              <div className='size-8 rounded-full flex items-center justify-center ring-[2px] ring-white relative'>
                <Image
                  src='/profile.jpeg'
                  fill={true}
                  className=" object-center rounded-full object-cover"
                />
              </div>
            </div>
            <div>{children}</div>
        </div>
    </div>
  )
}

export default layout