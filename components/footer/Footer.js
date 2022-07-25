import React from 'react'
import icons from '../icons/icons'
import Image from 'next/image'
import logo_linkedin from '../../docs/logo_linkedin.png'



const Footer = () => {

  return (
    <footer className="text-gray-200 text-opacity-80 text-xs w-3/5 mx-auto py-10 hidden md:visible">
            <Image
                src={logo_linkedin}
                alt="Picture of the author"
            />
        <div className="grid grid-cols-6 gap-4 mt-2">

            <div className="flex flex-col gap-3">
                <p>Acerca de</p>
                <p>Directrices comunitarias</p>
                <p>Privacidad y términos </p>
                <p>Sales Solutions</p>
                <p>Centro de seguridad</p>

                <p className="mt-3">LinkedIn Corporation © 2022</p>
            </div>

            <div className="flex flex-col gap-3">

                

            <p>Accesibilidad</p>
            <p>Empleo</p>
            <p>Opciones de publicidad</p>
            <p>Móvil</p>

            </div>

            <div className="flex flex-col gap-3">
            <p>Talent Solutions</p>
            <p>Marketing Solutions</p>
            <p>Publicidad</p>
            <p>Small Business</p>

            </div>

            <div className="flex flex-col gap-3">

                
                <div className="flex gap-2">
                    <p className="text-2xl">{icons.helpIcon}</p>

                    <div>
                        <p>¿Tienes preguntas?</p>
                        <p>Visita nuestro Centro de ayuda.</p>
                    </div>
                </div>
                <div className="flex gap-2">

                    <p className="text-2xl">{icons.settingsIcon}</p>
                    <div>
                        <p>Gestiona tu cuenta y la privacidad</p>
                        <p>Ve a los ajustes.</p>
                    </div>

                </div>

            </div>


            <div className=" col-span-2">

            <p>Seleccionar idioma</p>
            <div className="flex justify-between border items-center p-2 rounded-lg mt-1 bg-blackTheme">
                <p>Español (Spanish)</p>
                <p className="text-2xl">{icons.arrowDownIcon2}</p>
            </div>


            </div>


        </div>

    </footer>
  )
}

export default Footer

