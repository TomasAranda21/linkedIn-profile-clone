import React from 'react'
import CommentsAndLikes from '../commentsAndLikes/CommentsAndLikes'


const CardActivity = ({img, title, text, comments, likes, date, author, border}) => {
  return (
    
    <div className={`flex flex-col gap-3 ${!border ? 'border-none' : "border-t "} pb-3 border-white border-opacity-20`}>

    <h3 className="mt-3 text-xs text-gray-200 text-opacity-70"><span className="font-bold">Tomás Aranda</span> ha publicado esto • {date}</h3>
        <p className="text-sm">{title}</p>
        <div className="flex gap-3 items-start pb-4">
            <div className="overflow-hidden md:rounded-lg w-full sm:w-auto">
                <img className=" object-none h-20" 
                src={img} />
            </div>

            <div>
              <p className="text-sm">{text}</p>
              <p className="text-gray-200 text-opacity-60 text-xs">{author}</p>
            </div>
        </div>

    <CommentsAndLikes numLikes={likes} numComments={comments}/>

</div>
  )
}

export default CardActivity