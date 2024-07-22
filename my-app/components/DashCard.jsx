import Image from 'next/image'
import React from 'react'

const DashCard = ({title, stat, icon, comparison }) => {
  return (
    <div className='w-[15rem] h-max text-white  bg-neutral-950 hover:ring-1 flex flex-col items-start gap-3 hover:ring-neutral-900   text-center p-4 rounded-md hover:scale-[1px] transition'>
        <Image
            src={`/icons/${icon}`}
            width={25}
            height={25}
        />
        <h4 className='text-[14px] font-thin'>{title}</h4>
        <h1 className='text-3xl font-extrabold tracking-wide'>{stat}</h1>
        <div className='flex gap-1 items-center w-max'>
            {
                comparison > 0 ?
                (<Image src="/icons/trending-up.svg" width={18} height={18}/>):
                comparison < 0 &&
                (<Image src="/icons/trending-down.svg" width={18} height={18}/>)
            }
            <p className='text-neutral-500 text-[12px]'>{comparison}%</p>
        </div>
    </div>
  )
}

export default DashCard