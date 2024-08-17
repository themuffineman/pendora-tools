import React from 'react'
import styles from '@/components/components.module.css'
import { dashboardLinks } from '@/app/app.config'
import SubUrl from '@/components/SubUrl'
import Filter from '@/components/Filter'
const page = () => {
  return (
    <div className={` ${styles.ScrollBar} flex items-start py-14 text-white gap-10 h-full overflow-auto w-full`}>
        <Filter/>
        <div>
          <h1 className='text-4xl  font-extrabold tracking-tight'>Finder</h1>
          <div className='grid grid-flow-col grid-cols-2 gap-10 items-center justify-items-stretch h-[80%] w-full'>
              {dashboardLinks.map((link)=>(
                  link.name === 'Finder' && link.subUrls.map((url)=>(
                      (<SubUrl icon={url.icon} url={url.url}>{url.name}</SubUrl>)
                  ))
              ))}
          </div>
        </div>
    </div>
  )
}

export default page