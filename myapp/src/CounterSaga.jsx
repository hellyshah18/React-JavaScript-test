import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CounterSaga() {
   const counter = useSelector(y=>y.counter);
   const dis= useDispatch();

   const saveInfo = ()=>{

    dis({type: "INC_ASYC"})

   }


  return (
    <div>{counter}
    
    <button onClick={saveInfo}>+</button>
    </div>
  )
}