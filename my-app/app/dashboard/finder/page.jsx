import React from 'react'
import styles from '@/components/components.module.css'
import { dashboardLinks } from '@/app/app.config'
import SubUrl from '@/components/SubUrl'
const page = () => {
  return (
    <div className={` ${styles.ScrollBar} flex flex-col py-14 px-40 text-white gap-10 h-full overflow-auto w-full`}>
        <h1 className='text-4xl  font-extrabold tracking-tight'>Where Do You Want To Start?</h1>
        <div className='grid grid-flow-col grid-cols-2 gap-10 items-center justify-items-stretch h-[80%] w-full'>
            {dashboardLinks.map((link)=>(
                link.name === 'Finder' && link.subUrls.map((url)=>(
                    (<SubUrl icon={url.icon} url={url.url}>{url.name}</SubUrl>)
                ))
            ))}
        </div>
    </div>
  )
}

export default page