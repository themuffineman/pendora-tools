import React from 'react'
import styles from '@/components/components.module.css'
import { dashboardLinks } from '@/app/app.config'
import SubUrl from '@/components/SubUrl'
const page = () => {
  return (
    <div className={` ${styles.ScrollBar} grid grid-flow-col grid-cols-2 py-14 px-40 text-black gap-10 h-full overflow-auto w-full`}>
        {dashboardLinks.map((link)=>(
            link.name === 'Finder' && link.subUrls.map((url)=>(
                (<SubUrl icon={url.icon} url={url.url}>{url.name}</SubUrl>)
            ))
        ))}
    </div>
  )
}

export default page