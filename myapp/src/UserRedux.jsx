import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { UserError, UserRequest, UserSuc } from './action/userAction';

export default function UserRedux() {

  const data=  useSelector(y=>y.user);
  const dis = useDispatch();

  console.log(data);

  useEffect(()=>{

    dis(UserRequest())
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(y=>y.json())
    .then(y=>{

        dis(UserSuc(y))
    }).catch(y=>{

        dis(UserError(y))
    })
  },[])
  return (
    <div>UserRedux</div>
  )
}