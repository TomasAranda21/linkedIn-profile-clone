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
                        src="https://media-exp1.licdn.com/dms/image/C4E0BAQF8o7DdhAem3g/company-logo_100_100/0/1651242349165?e=1666828800&v=beta&t=cXH9r4_EZfjefSHgDTDvWY8qOI3ZAsmSLhHx_DuZqpo" />
                    </div>

                    <div className="">

                        <p>Limboteams</p>
                        <p className="text-gray-200 text-opacity-70">396 seguidores</p>

                    </div>

                </div>
                <div className="flex gap-2 items-center">
                    <div className=" w-15 h-15">
                        <img width={61}
                        src="https://media-exp1.licdn.com/dms/image/C4D0BAQGSIIQBk3VIOQ/company-logo_100_100/0/1542331300310?e=1666828800&v=beta&t=EXabRatz85FVWDo3I6BXTu4PgWPsFqUO54GOC2a9oH4" />
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


