import React from 'react'
import Button from '../buttons/Button'
import icons from '../icons/icons'

const CardEducation = ({title, date, name, img, type, border}) => {
  return (
        
        <div className={`flex md:gap-2 text-base  ${!border ? 'border-none' : "border-t "} pb-1 pt-5 border-white border-opacity-20`}>
            <div className="w-24 md:w-12 h-12 relative">
                <img width="48px" className=" object-cover absolute"
                src={img}/>

            </div>

            <div className="">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm">{name}</p>
                <p className="mb-2 text-gray-200 text-opacity-70 text-sm">Expedición: {date} · Sin fecha de vencimiento</p>

                <div className="font-medium">
                <Button text="Mostrar credencial" icon={icons.externalLinkIcon} right={true}/>

                </div>

            </div>


    </div>
  )
}

export default CardEducation
