import React from 'react'
import Button from '../buttons/Button'
import icons from '../icons/icons'

const CardProfileViewed = ({name, description, img, type}) => {
  return (

    <div className="flex gap-3">
        <div>
            <div className="w-11 h-11 overflow-hidden rounded-full relative">
                <img className=" object-cover absolute" 
                src={img} />

            </div>
        </div>

        <div className="text-gray-200 text-opacity-70 text-xs flex sm:flex-col sm:items-start items-center gap-2 sm:gap-1  sm:w-full">
            <div>
                <p className="mb-1 text-gray-200 text-opacity-100 font-medium text-sm">{name}</p>
                <p className="">{description}</p>
            </div>

        <div className="text-gray-200 mt-2 text-sm">

            {type ? 


            <>
            <div className="hidden sm:block">
                <Button text="Mensaje"/> 
            </div>
                <p className="text-gray-200 mt-2 text-sm block sm:hidden border rounded-full p-2">{icons.paperPlaneIcon}</p>
            </>
            
            : 
            
            <>
            <div className="hidden sm:block">
                <Button text="Conectar"/> 
            </div>
            <p className="text-gray-200 mt-2 text-sm block sm:hidden border rounded-full p-2">{icons.addUserIcon}</p>

            </>
            
            
            }
            
        </div>

        </div>


    </div>

  )
}

export default CardProfileViewed