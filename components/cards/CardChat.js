import React from 'react'
import icons from '../icons/icons'

const CardChat = () => {
  return (

    <div className=" hidden lg:block fixed bottom-0 right-0 bg-blackTheme text-gray-200  rounded-xl rounded-b-sm border-b border-opacity-20 border-gray-200">

        <div className="flex px-2 py-2 gap-20 justify-between">

                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 relative">
                        <img className=" object-cover absolute z-10 rounded-full" 
                        src="https://res.cloudinary.com/dj1pp4ivb/image/upload/v1658791690/linkedin/1658599733549_ek2crw.jpg" />

                        <div className="  z-20 h-3 w-3 absolute bg-green-500 rounded-full top-6 left-6 border-gray-900 border">
                            <div className=" before:content-[' ']">

                            </div>
                        </div>
                    </div>
                <div>
                    <h3 className="font-semibold text-sm">Mensajes</h3>
                </div>
            </div>

            <div className="flex items-center gap-4 font-bold text-lg">
                <p>{icons.dotsIcon}</p>
                <p>{icons.penIcon}</p>
                <p className="text-xl">{icons.arrowUpIcon}</p>


            </div>

        </div>


    </div>

  )
}

export default CardChat

