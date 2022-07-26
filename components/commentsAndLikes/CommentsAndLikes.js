import React from 'react'

const CommentsAndLikes = ({numLikes, numComments}) => {
  return (
    <div className='flex justify-between items-center text-sm text-gray-200 px-2'>

        <div className='flex items-center gap-2 '>

        <div className='flex gap-13 relative w-9 h-4 opacity-100' >

            <img className="left-0 absolute z-0 opacity-100" width={16} height={16}
            src="https://static-exp1.licdn.com/sc/h/esahr356vrv0vklww6hcjar1j"/>

            <img className="left-3 absolute z-10" width={16} height={16}
            src="https://static-exp1.licdn.com/sc/h/9wt27hvi2lgll1v30u00n0p5p"/>

            <img className="left-6 absolute z-20" width={17} height={17}
            src="https://static-exp1.licdn.com/sc/h/2g7ubs8g0yt1r2c0qair42esg"/>


        </div>

            <p className="opacity-70 text-xs">{numLikes}</p>
        </div>

        <div>
            <p className="opacity-70 text-xs">{numComments === '0' ? '' : `${numComments} comentarios`} </p>
        </div>

    </div>
  )
}

export default CommentsAndLikes