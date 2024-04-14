import React, { useEffect, useState } from 'react'

export const APITour = () => {
    const url="https://course-api.com/react-tours-project";
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
            return(<div key={index}><img src={value.image}></img><br></br>{value.name}<br></br>{value.price}<br></br>{value.info}<button onClick={()=>{handleNI(index)}}>NI</button></div>)
        })
        }</div>
  )
}
