import React from 'react'
import Dashlink from '@/components/dashlink'
import { dashboardLinks } from '../app.config.js'

const layout = ({children}) => {
  return (
    <div className="w-full h-full text-black flex">
        <div className='w-[10rem] h-full'>
          {dashboardLinks.map((link)=>(
            <Dashlink key={link.name} icon={link.icon} url={link.url} linkName={link.name} subUrls={link.subUrls} />
          ))}
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