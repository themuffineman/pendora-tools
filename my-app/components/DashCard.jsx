import Image from 'next/image'
import React from 'react'

const DashCard = ({title, stat, icon, comparison }) => {
  return (
    <div className='w-[15rem] h-[7rem] text-white rounded-md p-4 ring-1 ring-neutral-700 bg-neutral-900 flex flex-col items-start gap-1'>
        <Image
            src={`/icons/${icon}`}
            width={25}
            height={25}
        />
        <h4 className='text-[11px] font-thin'>{title}</h4>
        <h1 className='text-2xl font-extrabold tracking-wide'>{stat}</h1>
        <div></div>
    </div>
  )
}

export default DashCard