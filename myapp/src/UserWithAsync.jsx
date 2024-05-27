import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from './asyncAction/userActionasyc';

export default function UserWithAsync() {

    const d = useSelector(y=>y.user);
    const ud = useDispatch();

    console.log(d)

    useEffect(()=>{
        ud(getUserList())

    },[])
  return (
    <div>UserWithAsync</div>
  )
}