import React from 'react'

function ButtonComponent({label,value ,clickHandler}) {
  return (
    <div>
      <button onClick={()=>clickHandler(value)}>{label}</button>
    </div>
  )
}

export default ButtonComponent;
