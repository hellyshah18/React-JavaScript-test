import React, { useEffect, useState } from 'react'


export const FakeStoreAPIProducts = () => {
    const url="https://fakestoreapi.com/products";
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch(url).then(y=>y.json()).then(y=>{
            setData(y);
        })
    },[])

  return (
    <div>{
        data.map((value,index)=>{
            return(<div key={index}>
                {value.title}<img src={value.image}></img><br></br>{value.description}<br></br>{value.price}<br></br>{value.category}</div>)
        })
     }</div>
  )
}
