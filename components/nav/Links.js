import React from 'react'

const Links = ({text, icon}) => {
  return (
    <div className="flex flex-col gap-0.5 items-center text-opacity-80 text-gray-100 hover:text-opacity-100 
    hover:text-white cursor-pointer duration-200">
        <p className="text-xl">{icon}</p>
        <p className="">{text}</p>
    </div>
  )
}

export default Links