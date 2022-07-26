import React from 'react'

const CardLearning = ({text, img, border}) => {
  return (
        <div className={`flex text-sm gap-2 ${!border ? 'border-none' : "border-t "} pt-3 border-white border-opacity-20`}>
            <div className=" h-15 w-28 relative overflow-hidden ">
                <img className=" object-cover h-15 w-28 absolute"
                src={img} />
            </div>

            <div className="w-2/3">
                <p className="font-medium">{text}</p>
            </div>

        </div>
  )
}

export default CardLearning