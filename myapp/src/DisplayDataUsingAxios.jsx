import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const DisplayDataUsingAxios = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(y=>{
            setData(y.data)
        })
    },[])
  return (
    <div>{
        data.map((value)=>{
            return(<div>{value.title}</div>)
        })}</div>
  )
}
