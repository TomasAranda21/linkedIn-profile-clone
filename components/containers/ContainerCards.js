import React from 'react'

const ContainerCards = ({children}) => {
  return (
    <div className=" bg-blackTheme mb-1.5 md:mb-2 md:rounded-lg">
        {children}
    </div>
  )
}

export default ContainerCards