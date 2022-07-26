import React from 'react'
import icons from '../icons/icons'

const HeaderMovile = () => {
  return (

    <header className=" bg-blackTheme w-full fixed z-50 p-2 px-4 block lg:hidden">
        <div className="flex items-center justify-between gap-5 text-gray-300">
            <div>
                <p className="text-2xl">{icons.arrowLeftIcon}</p>
            </div>


            <div className="bg-darkBlue flex gap-2 items-center text-gray-300 rounded-md p-2 text-sm px-3 w-full justify-start cursor-text">
                <p>{icons.searchIcon}</p>
                <p>Tomás Aranda</p>
            </div>

            <div>
                <p className="text-2xl">{icons.settingsIcon2}</p>
            </div>
        </div>
    </header>

  )
}

export default HeaderMovile