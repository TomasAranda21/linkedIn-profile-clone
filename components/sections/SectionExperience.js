import React from 'react'
import Button from '../buttons/Button'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import TitleSection from '../titles/TitleSection'


const SectionExperience = () => {
  return (
    <ContainerCards>
    <ContainerContentsCard>
        <TitleSection text="Experiencia"/>

        <div className="flex gap-2 mt-5">
            <div className=" w-36 md:w-12 h-12 relative">
                <img width="48px" className=" object-cover absolute"
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQFQr9e68bBOPQ/company-logo_100_100/0/1626275253364?e=1666828800&v=beta&t=OgHz9cQlg3QjaHbYgm1fQeVMx-EI6MW8TDI6V3Xz5EM"/>
            </div>
            
            
            <div className="">
               <h3>Desarrollador web</h3>

               <div className=" text-gray-200 text-opacity-70">
                    <p className="text-gray-200">Verdulería Luz | Peluquería Marga · Profesional independiente</p>
                    <p>feb. 2022 - abr. 2022 · 3 meses</p>
                    <p>Córdoba, Córdoba, Argentina</p>
               </div>

                <div>
                    <p>----- Verdulería Luz</p>
                    <p className='text-gray-200 text-opacity-95 mt-3'>E-commerce y un Administrador para poder agregar, editar y eliminar los productos de {''}
                    <span className="text-opacity-70 text-gray-200 hover:text-blue-400 cursor-pointer
                    
                    ">... ver más</span></p>

                    <p>Aptitudes: JSON Web Token (JWT) · Metodologías ágiles · Desarrollo front end · HTML5 · React.js · Node.js · Tailwind · JavaScript · MongoDB · Express.js</p>

                </div>

            </div>

        </div>


    </ContainerContentsCard>
</ContainerCards>
  )
}

export default SectionExperience