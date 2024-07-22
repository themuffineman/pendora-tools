import Image from 'next/image'
import React from 'react'

const DashCard = ({title, stat, icon, comparison }) => {
  return (
    <div className='w-[10rem] h-[7rem] text-white rounded-md p-4 ring-1 ring-neutral-700 bg-neutral-900 flex flex-col items-center gap-2'>
        <Image
            src={`/icons/${icon}`}
            width={25}
            height={25}
        />
        <h4 className='text-base font-light'>{title}</h4>
        <h1>{stat}</h1>
        <div></div>
    </div>
  )
}

export default DashCard