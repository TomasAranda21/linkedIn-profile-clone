import React from 'react'
import Button from '../buttons/Button'
import icons from '../icons/icons'

const CardProyects = ({title, date, text, border}) => {
  return (

    <div className={`flex flex-col gap-4 ${!border ? 'border-none' : "border-t "} pt-3 border-white border-opacity-20`}>

        <div className="flex flex-col gap-1 mb-1">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm">{date}</p>

            <div>
                <Button text="Mostrar proyecto" right={true} icon={icons.externalLinkIcon}/>
            </div>

        </div>

        <div>
            <p className="text-sm">{text}</p>
        </div>
    </div>

  )
}

export default CardProyects



 