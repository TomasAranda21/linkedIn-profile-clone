import React from 'react'

const ButtonSeeMore = ({children}) => {
  return (
    <div className="flex gap-1 justify-center font-semibold border border-b-0 border-x-0 border-white border-opacity-20 duration-200
    items-center hover:bg-white hover:bg-opacity-20  rounded-lg rounded-t-none p-2 py-4 cursor-pointer">
        {children}
    </div>
  )
}

export default ButtonSeeMore