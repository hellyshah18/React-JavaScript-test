import React, { useEffect, useState } from 'react'

export const APIEvenButtons = () => {
    
    const url="https://fakestoreapi.com/products";
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch(url).then(y=>y.json()).then(y=>{
            setData(y);
        })
    },[])

    const handleNI=(index)=>{
    const p=[...data];
    p.splice(index,1);
    setData(p);
    }
  return (
    <div>{
        data.map((value,index)=>{
            return(<div>{value.title}
            {(index%2==0)&&<button onClick={()=>{handleNI(index)}}>NI</button>
        }</div>)
        })
     } </div>
)
}

 
