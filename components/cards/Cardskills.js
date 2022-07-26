import React from 'react'
import icons from '../icons/icons'

const Cardskills = ({type, displayButton, isNotValidated, title}) => {
  return (
    <div className={` text-sm ${ type ? 'border-nome': "border-b border-white border-opacity-20 pb-6" }`}>

        <h3 className="font-bold mb-3">{title}</h3>

        <div className="flex flex-col gap-4 lg:pl-1 pl-0">
            <div className="flex items-center gap-2">
                <p className="text-xl text-blue-300">{icons.imgLinkedinIcon}</p>
                <p>Desarrollador web en Verdulería Luz | Peluquería Marga</p>
            </div>


            {!isNotValidated ? 
            <div className="flex items-center gap-2">
                <p className="text-xl">{icons.userIcon}</p>
                <p>2 validaciones</p>
            </div>
            : 
            <div className="flex items-center gap-2">
                <p className="text-xl">{icons.checkIcon}</p>
                <p>Ha superado la evaluación de aptitudes de LinkedIn</p>
            </div>
            
            }

            

            <div className="flex items-center gap-2">
            <p className="text-xl">{icons.folderIcon}</p>

                <p>Clon de Netflix</p>
            </div>

            {displayButton && 
                <div className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-white hover:bg-opacity-20 p-1 px-2 w-2/3 md:w-1/3 md:justify-center rounded-lg">
                    <p>Mostrar todos los datos (4)</p>
                    <p>{icons.arrowRightIcon}</p>
                </div>
            }
        </div>
    </div>
  )
}

export default Cardskills



