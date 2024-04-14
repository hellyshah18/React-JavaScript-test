import React, { useState } from 'react'

export const CounterUserInput = () => {
    const [value,setValue]=useState({
        inputNumber:''
    })
    const [Counter,setCounter]=useState(0);
    const handleInput = (e) =>{
        setValue({...value,[e.target.name]:e.target.value})
    }
    const inc = () =>{
        setCounter(Counter + Number(value.inputNumber))
        console.log(Counter)
    }
    const dec = () =>{
        if(Counter - Number(value.inputNumber)>=0 ){

            setCounter(Counter - Number(value.inputNumber))
            console.log(Counter)
        }

    }
  return (
    <div>

    <form>
        <button type="button" onClick={dec}>-</button>
        <input type="text" name='inputNumber' id='inputNumber' onChange={handleInput}></input>
        <button type="button" onClick={inc}>+</button>
        <div>{Counter}</div>
    </form>
  
</div>
  )
}
