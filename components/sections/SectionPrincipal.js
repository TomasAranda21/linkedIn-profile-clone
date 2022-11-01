import React from 'react'
import Button from '../buttons/Button'
import icons from '../icons/icons'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import postImage from '../../public/postImage.jpeg'
import Image from 'next/image'


const CardPrincipal = () => {
  return (
    <ContainerCards>
        <div className="relative">
            <div className="h-48 relative w-full">
                <img className="rounded-lg rounded-b-none h-36 md:h-48 w-full absolute"  
                src={'/postImage.jpeg'}/>
            </div>

            <div className=" absolute top-16 md:top-24 left-8">
                <div className="w-36 h-36 overflow-hidden relative rounded-full">
                    <Image width = "144px" height = "144px" className=" object-cover w-36 h-36 overflow-hidden absolute"
                    src="/perfil.png" />
                </div>
            </div>
        </div>

        <ContainerContentsCard>
            <div className="md:pt-8">
                <div>
                    <h2 className="text-2xl font-semibold">Tomás Aranda</h2>
                    <p>Front-End Developer | React | JavaScript | CSS | Tailwind.</p>
                    <p className="text-opacity-50 text-gray-200 text-sm">Temas que suele tratar: #react, #frontend y #javascript</p>
                    <p className="text-opacity-50 text-gray-200 text-sm">Córdoba, Córdoba, Argentina • <span className="text-blueTheme font-medium">Información de contacto</span></p>

                    <p className="text-opacity-50 text-gray-200 mt-3 font-medium text-sm">1079 seguidores • Más de 500 contactos</p>

                </div>

                <div className="flex items-center gap-3 mt-3">
                    <Button text="Seguir" className="md:w-auto justify-center w-full px-1 md:px-4" icon={icons.plusIcon} type={true}/>
                    <Button  className="md:w-auto justify-center w-full px-2 md:px-4" text="Enviar mensaje" />

                    <div className="hidden sm:block">
                        <Button text="Más"/>

                    </div>

                    <div className="block rounded-full border p-2 sm:hidden">
                        <p>{icons.dotsIcon}</p>
                    </div>

                </div>

                <div className="p-3 mt-4 md:bg-brown bg-gray-700 sm:w-1/2 rounded-lg text-sm">
                    <p className="font-medium"> Busco empleo</p>
                    <p>Cargos de Desarrollador de front-end</p>
                    <p className="text-blueTheme">See all details</p>
                </div>

            </div>
        </ContainerContentsCard>
    </ContainerCards>


  )
}

export default CardPrincipal