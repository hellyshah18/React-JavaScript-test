import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

export default function UserRequestSaga() {

  const d=   useSelector(y=>y.user);

  console.log(d);

  const disp = useDispatch();

  useEffect(()=>{
    disp({type:"UserRequest"})

  },[])
  
  return (
    <div>UserRequestSaga</div>
  )
}