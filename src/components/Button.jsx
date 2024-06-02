import React from 'react'
import Cards from './Cards'

const Button = (props) => {
  return (    
    <div>
      
    <button  className="  bg-red-500 hover:bg-red-800 px-1 rounded-sm">
        {props.name}
      </button>
      
    </div>
  )
}

export default Button
