import React, { useState } from 'react'

export const Click = () => {
    const[value,setValue]= useState(10);
    const handleClick=()=>{
        setValue(value-1);
    }
  return (
    <div onClick={handleClick}>{value}</div>
  )
}
