import Image from 'next/image'
import React from 'react'

const DashCard = ({title, stat, icon, comparison }) => {
  return (
    <div className='w-[16rem] h-[8rem] text-white bg-neutral-800 hover:ring-1 flex flex-col items-start gap-1 justify-between hover:ring-neutral-900   text-center p-4 rounded-md hover:scale-[5px] transition'>
        <div className="w-full flex justify-start items-center gap-2">
          <Image
              src={`/icons/${icon}`}
              width={15}
              height={15}
          />
          <h4 className='text-[12px] font-thin'>{title}</h4>
        </div>
        <h1 className='text-4xl font-black tracking-tight'>{stat}</h1>
        <div className='flex gap-1 items-center w-max'>
            {
                comparison > 0 ?
                (<Image src="/icons/trending-up.svg" width={15} height={15}/>):
                comparison < 0 &&
                (<Image src="/icons/trending-down.svg" width={15} height={15}/>)
            }
            <p className='text-neutral-500 text-[12px]'>{comparison}%</p>
        </div>
    </div>
  )
}

export default DashCard