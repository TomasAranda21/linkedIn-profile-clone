import React from 'react'
import ContainerViewMore from '../containers/ContainerViewMore'

const SectionInterests = () => {
  return (
    <ContainerViewMore title="Intereses" textSeeMore="Mostrar todas las empresas (40)">
        
        <div className="text-sm">
            <div className="flex gap-8 font-medium py-3 text-sm md:text-base
            border border-t-0 border-x-0 border-white border-opacity-20 border-spacing-12">
                <p>Empresas</p>
                <p>Grupos</p>
                <p>Instituciones educativas</p>
            </div>

            <div className="flex md:flex-row gap-5 md:gap-0 flex-col justify-between mt-5 md:pr-20 md:items-center">
                <div className="flex gap-2 items-center">
                    <div className=" w-15 h-15">
                        <img width={61}
                        src="https://res.cloudinary.com/dj1pp4ivb/image/upload/v1658790907/linkedin/1651242349165_vhiaht.jpg" />
                    </div>

                    <div className="">

                        <p>Limboteams</p>
                        <p className="text-gray-200 text-opacity-70">396 seguidores</p>

                    </div>

                </div>
                <div className="flex gap-2 items-center">
                    <div className=" w-15 h-15">
                        <img width={61}
                        src="https://res.cloudinary.com/dj1pp4ivb/image/upload/v1658790907/linkedin/1542331300310_xlmzcl.jpg" />
                    </div>

                    <div className="">

                        <p>ADN - Recursos Humanos</p>
                        <p className="text-gray-200 text-opacity-70">99.100 seguidores</p>

                    </div>

                </div>
            </div>
        </div>

    </ContainerViewMore>
  )
}

export default SectionInterests


