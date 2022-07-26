import React from 'react'
import CommentsAndLikes from '../commentsAndLikes/CommentsAndLikes'
const CardFeatured = ({img, text, type, text2, comments, likes}) => {
  return (

    <div className=" w-full sm:w-56 sm:h-60 overflow-hidden border rounded-xl gap-4 border-gray-500 border-opacity-60 flex md:block flex-col justify-between pb-5">

        <p className="text-gray-200 text-opacity-70 text-sm p-2">{type}</p>

        <p className="text-xs px-1.5 py-1 font-semibold">{text}</p>

        <div className="relative w-full overflow-hidden sm:w-56 sm:h-32 h-32">  
            <img className="absolute object-cover w-full"
            src={img}/>
        </div>


        {
          type === "Documento" ?
        <p className="text-sm relative md:py-3 px-2 font-bold mt-7 ">{text2}</p>
        
          :

        <CommentsAndLikes numComments={comments} numLikes={likes}/>
        }

    </div>
  )
}

export default CardFeatured