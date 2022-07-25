import React from 'react'
import CommentsAndLikes from '../commentsAndLikes/CommentsAndLikes'
const CardDestacados = () => {
  return (
    <div className="border rounded-xl border-gray-500 border-opacity-60">

            <p className="text-gray-200 text-opacity-70 text-sm p-2">Publicación</p>

        <div>  

            <img className="" width={231} height={121}
            src="https://media-exp1.licdn.com/dms/image/C4D22AQGk4wQMvtRFyQ/feedshare-shrink_480/0/1658266863608?e=1661385600&v=beta&t=m48SvAPzeXi-yon7pxKaeulphv8QS431BWemBhr2cv8"/>

        </div>


        <div>

        </div>
        
        <CommentsAndLikes numComments="33" numLikes="205"/>

    </div>
  )
}

export default CardDestacados