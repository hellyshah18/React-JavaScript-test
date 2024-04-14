import React, { useState } from 'react'
import review from './review'


export const reviewLoop = () => {
    const[value,setValue]= useState(review)
    const next=()=>{
        setValue(id+1)
    }
    const prev=()=>{
        setValue(id-1)
    }
  return (
    <div>{value.id}{value.name}{value.job}{value.text}<button onClick={()=>{next}}>Next</button><button onClick={()=>{prev}}>Prev</button></div>
  )
}
