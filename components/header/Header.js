import React from 'react'
import icon_linkedin from '../../public/icono_linkedin.png'
import Image from 'next/image'

import icons from '../icons/icons'
import Links from '../nav/Links'

const Header = () => {
  return (
      <header className=" bg-blackTheme w-full border-b border-white border-opacity-20 fixed z-50 hidden lg:block">
        <nav className=" 2xl:w-3/4 mx-auto flex items-center text-gray-100 justify-center gap-28 xl:gap-36 p-0.5 lg:px-2 xl:px-0">
            <div className="flex items-center gap-3">
                <Image
                    src={icon_linkedin}
                    alt=""
                    width={35}
                    height={35}
                />
                <div className="bg-darkBlue flex gap-2 items-center text-gray-300 rounded-md p-2 text-sm px-3 w-72 justify-start cursor-text">
                
                    <p>{icons.searchIcon}</p>
                    <p>Buscar</p>
                </div>

            </div>

            <div className="flex items-center gap-8 text-xs ">

                <Links icon={icons.homeIcon} text="inicio"/>
                <Links icon={icons.userIcon} text="Mi red"/>
                <Links icon={icons.walletIcon} text="Empleos"/>
                <Links icon={icons.messageIcon} text="Mensajes"/>
                <Links icon={icons.notificationIcon} text="Notificaciones"/>

                <div className="flex flex-col items-center text-opacity-80 text-gray-100 hover:text-opacity-100 hover:text-white cursor-pointer duration-200">
                    <div className="w-6 h-6 overflow-hidden rounded-full">
                        <Image width = "24px" height = "24px"
                        src="/perfil.png" />
                    </div>

                    <div className="flex items-center">
                        <p>Yo</p>
                        <p className="text-xl">{icons.arrowDownIcon2}</p>

                    </div>
                </div>

                <div className="flex items-center gap-1 border-l border-white border-opacity-20 pl-2">
                    <div className="flex flex-col items-center text-opacity-80 text-gray-100 hover:text-opacity-100 hover:text-white cursor-pointer duration-200">
                        <p className="text-3xl text-gray-200 text-opacity-70 font-light">{icons.menuGrid}</p>
                        <div className="flex items-center">
                            <p className="text-xs">Productos</p>
                            <p className="text-lg">{icons.arrowDownIcon2}</p>
                        </div>
                    </div>

                    <p className="text-yellow-400 text-xs">Prueba Premium gratis</p>
                </div>
            </div>
        </nav>
        </header>
  )
}

export default Header