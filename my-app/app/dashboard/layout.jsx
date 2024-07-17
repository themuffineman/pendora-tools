import React from 'react'
import Dashlink from '@/components/dashlink'
import { dashboardLinks, miscLinks } from '../app.config.js'
import styles from '@/components/components.module.css'
import Image from 'next/image.js'
import Link from 'next/link.js'


const layout = ({children}) => {
  return (
    <div className="w-full h-full text-black flex">
        <div className='w-[10rem] px-2 shadow-sm  shadow-neutral-100 h-full flex flex-col items-center justify-start gap-10 border-r-2 border-neutral-100'>
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
                <p className='text-sm text-black w-max font-normal'>{link.name}</p> 
              </Link>
            ))}
          </div>
        </div>
        <div>
            <div>
              Hello world
            </div>
            <div>{children}</div>
        </div>
    </div>
  )
}

export default layout