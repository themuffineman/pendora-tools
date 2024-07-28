import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SubUrl = ({children, url, icon }) => {
  return (
    <Link className="w-[16rem] h-full flex flex-col justify-between items-center gap-2 text-white bg-neutral-900 hover:ring-1 hover:ring-neutral-800 text-center p-4 rounded-md hover:scale-[5px] transition" href={url}>
        <Image
            src={`/icons/${icon}`}
            width={50}
            height={50}
            className='my-auto'
        />
        <h4 className='text-lg font-medium'>{children}</h4>
    </Link>
  )
}

export default SubUrl