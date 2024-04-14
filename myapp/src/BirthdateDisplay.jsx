import React, { useState } from 'react'
import birthdays from './birthday'
export const BirthdateDisplay = () => {
    const[value,setValue]= useState(birthdays)
    const cleardata=()=>{
        setValue([]);
    }

  return (
    <div>{value.name}
    <button onClick={cleardata}>Clear</button></div>
  )
}
