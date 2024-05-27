import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decre, Incre } from './action/counteraction'

export default function CounterRedux() {
    const d=useSelector(y=>y.counter)
    const p= useDispatch()
    const incre=()=>{
        p(Incre())
    }
    const decre=()=>{
        p(Decre())
    }
  return (
    <div>
        <button onClick={decre}>-</button>
        {d}
        <button onClick={incre}>+</button>
    </div>
  )
}
