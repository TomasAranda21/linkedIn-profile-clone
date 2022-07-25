import React from 'react'
import Button from '../buttons/Button'

const CardProfileViewed = () => {
  return (

    <div class="flex gap-3">
        <div>
            <div className="w-13 h-13 overflow-hidden rounded-full relative">
                <img className=" object-cover absolute" 
                src="https://media-exp1.licdn.com/dms/image/C5603AQEYKI84LcolHA/profile-displayphoto-shrink_100_100/0/1648607977332?e=1664409600&v=beta&t=CGzRbEY8UU5xC7AUDhLzRwslL7eQPZ53v1u11nls7d8" />

            </div>
        </div>

        <div className="text-gray-200 text-opacity-70 text-xs">
            <p className="mb-1">Gabriel Jalil • +3er</p>
            <p>Estudiante en Henry | Full Stack Developer| React | Redux | Javascript | CSS | HTML5 ...</p>

        <div className="text-gray-200 mt-2 text-sm">
            <Button text="Conectar"/>

        </div>

        </div>


    </div>

  )
}

export default CardProfileViewed