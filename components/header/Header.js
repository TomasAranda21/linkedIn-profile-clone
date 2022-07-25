import React from 'react'
import icon_linkedin from '../../docs/icono_linkedin.png'
import Image from 'next/image'

import icons from '../icons/icons'
import Links from '../nav/Links'

const Header = () => {
  return (
      <header className=" bg-blackTheme w-full border-b border-white border-opacity-20 fixed z-50">
                <nav className=" w-3/4 mx-auto flex items-center text-gray-100 justify-center gap-36 p-1">
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

                    <div className="flex items-center gap-8 text-xs">

                        <Links icon={icons.homeIcon} text="inicio"/>
                        <Links icon={icons.userIcon} text="Mi red"/>
                        <Links icon={icons.walletIcon} text="Empleos"/>
                        <Links icon={icons.messageIcon} text="Mensajes"/>
                        <Links icon={icons.notificationIcon} text="Notificaciones"/>

                        <div className="flex flex-col items-center text-opacity-80 text-gray-100 hover:text-opacity-100 hover:text-white cursor-pointer duration-200">
                            <div className="w-6 h-6 overflow-hidden rounded-full">
                                <img width
                                src="https://media-exp1.licdn.com/dms/image/D4D35AQHKZJbaTDjZPQ/profile-framedphoto-shrink_100_100/0/1658599733549?e=1659315600&v=beta&t=kfyXkPZoNLy-tk1j_vIbL72qYWC5cZlwbmhY9WQ5Fho" />
                            </div>

                            <div className="flex items-center">
                                <p>Yo</p>
                                <p className="text-xl">{icons.arrowDownIcon2}</p>

                            </div>
                        </div>

                        <div className="flex items-center gap-3 border-l border-white border-opacity-20 pl-2">
                            
                                
                                {/* <p>Productos</p> */}
                                <div className="flex flex-col gap-0.5 items-center text-opacity-80 text-gray-100 hover:text-opacity-100 hover:text-white cursor-pointer duration-200">
                                    <p className="text-2xl">{icons.menuGrid}</p>
                                    <div className="flex items-center">
                                        <p className="">Productos</p>
                                        <p className="text-xl">{icons.arrowDownIcon2}</p>
                                    </div>
                                </div>
                                

                                <p className="text-yellow-500 text-xs">Prueba Premium gratis</p>
                            
                        </div>
                    </div>
                </nav>
        </header>
  )
}

export default Header