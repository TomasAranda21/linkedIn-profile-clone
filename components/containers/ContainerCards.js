import React from 'react'

const ContainerCards = ({children, bgBlue}) => {
  return (
    <div className={` ${bgBlue ? 'bg-gray-800 lg:bg-blackTheme' : "bg-blackTheme" } mb-1.5 md:mb-2 md:rounded-lg`}>
        {children}
    </div>
  )
}

export default ContainerCards