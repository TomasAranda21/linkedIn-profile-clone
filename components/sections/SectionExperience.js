import React from 'react'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import icons from '../icons/icons'
import TitleSection from '../titles/TitleSection'


const SectionExperience = () => {
  return (
    <ContainerCards>
    <ContainerContentsCard>
        <TitleSection text="Experiencia"/>

        <div className="flex gap-2 mt-5 relative">
            
            <div>
                <p className="text-4xl mt-2 text-blue-300">{icons.imgLinkedinIcon}</p>

                <div className="flex flex-col items-center justify-between gap-32 relative mt-5">
    
                    <p className="text-xs text-white text-opacity-60 bg-gray-300 bg-opacity-30 text-transparent rounded-full">{icons.buttonIcon}</p>

                        <div className="z-20 h-36 absolute bg-white top-8 border-white border-opacity-10 bg-opacity-10 border">
                            <div className=" before:content-[' ']">

                            </div>
                        </div>

                    <p className="mt-12 text-xs text-white text-opacity-60 bg-gray-300 bg-opacity-30 text-transparent rounded-full">{icons.buttonIcon}</p>

                </div>
            </div>

            <div className="text-sm">

                <div className="mb-3">
                    <h3 className="font-semibold text-base">Verdulería Luz | Peluquería Marga</h3>
                    <p className="text-sm">Profesional independiente · 3 meses</p>
                </div>

               <div className="flex flex-col gap-3">

                    <div className="text-gray-200 text-opacity-70 text-sm">
                        <p className="text-base font-semibold text-gray-200 text-opacity-100">Desarrollador de aplicaciones web</p>
                        <p>mar. 2022 - abr. 2022 · 2 meses</p>
                        <p>Córdoba, Córdoba, Argentina</p>
                    </div>

                    <div>
                        <p>■ VERDULERIA LUZ</p>
                        <div className="flex gap-2 items-center">
                            <p>E-Commerce y Administrador para el manejo de los productos</p>
                            <p className="text-gray-200 text-opacity-70 text-sm"> ... ver más</p>

                        </div>
                    </div>
                    
                    <p><span className="font-medium">Aptitudes:</span>{" "}JSON Web Token (JWT) · Metodologías ágiles · Desarrollo front end · HTML5 · React.js · Node.js · Tailwind · JavaScript · MongoDB · Express.js</p>
 
               </div>


               <div className="flex flex-col gap-3 mt-6">

                    <div className="text-gray-200 text-opacity-70 text-sm">
                        <p className="text-base font-semibold text-gray-200 text-opacity-100">Desarrollador de aplicaciones web</p>
                        <p>feb. 2022 - mar. 2022 · 2 meses</p>
                        <p>Córdoba, Córdoba, Argentina</p>
                    </div>

                    <div>
                        <p>■ PELUQUERIA MARGA</p>
                        <div className="flex gap-2 items-center">
                            <p>Administrador de turnos para peluquería</p>
                            <p className="text-gray-200 text-opacity-70 text-sm"> ... ver más</p>

                        </div>
                    </div>
                    
                    <p><span className="font-medium">Aptitudes:</span>{" "}Mongoose · JSON Web Token (JWT) · Hojas de estilos en cascada (CSS) · React.js · Node.js · Tailwind · JavaScript · MongoDB · Express.js</p>
                    

               </div>
            </div>
        </div>


    </ContainerContentsCard>
</ContainerCards>
  )
}

export default SectionExperience