import React from 'react'

const Button = ({text, type, icon, right, className}) => {
  return (
    <button 
    className={  ` ${type ? 'bg-blueTheme text-gray-800 hover:bg-lightBlue ' : "border hover:bg-white hover:bg-opacity-20" } 
    
    rounded-2xl  font-bold p-1 px-4 flex items-center gap-1 duration-200  ${className}`}> 

    {right ? (
      <>
          {text} 
      <p>{icon}</p>
      
      </>
      )
      
      
      : (
        <>
        <p>{icon}</p>
        {text} 
    
        </>
      )

    }
    
    
    
    
    </button>
  )
}

export default Button