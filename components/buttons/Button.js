import React from 'react'

const Button = ({text, type}) => {
  return (
    <button className={  ` ${type ? 'bg-blueTheme text-gray-800' : "border" } rounded-2xl  font-semibold p-1 px-4`}> {text}</button>
  )
}

export default Button