import React from 'react'
import Button from '../buttons/Button'

const CardEducation = ({title, date, name, img, type}) => {
  return (
        
        <div className={`flex gap-2 text-base  ${ type ? 'border-nome': "border-b  border-white border-opacity-20 pb-5" } `}>
            <div className="w-36 md:w-12 h-12 relative">
                <img width="48px" className=" object-cover absolute"
                src={img}/>

            </div>

            <div className="">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm">{name}</p>
                <p className="mb-2 text-gray-200 text-opacity-70 text-sm">{date}</p>

                <div className="font-medium">
                <Button text="Mostrar credencial"/>

                </div>

            </div>


    </div>
  )
}

export default CardEducation
