import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`${className} bg-neutral-950 hover:ring-1 flex items-center justify-center hover:ring-neutral-900   text-center p-4 px-5 text-white w-max rounded-md h-10 hover:scale-[1px] transition`} >{children}</button>
  )
}

export default Button