import React, { useState } from 'react'

export const Form = () => {
    const[data,setValue]= useState({
        Name:"",
        Contact:'',
        Email:"",
        Password:""
    })
    const handleName=(e)=>{
        setValue({...data,"Name":e.target.value})
        }
    const handleContact=(e)=>{
            setValue({...data,"Contact":e.target.value})
            }
    const handleEmail=(e)=>{
    setValue({...data,"Email":e.target.value})
    }
    const handlePassword=(e)=>{
        setValue({...data,"Password":e.target.value})
        }
    const handleSubmit=(e)=>{
            e.preventDefault()
            console.log(data)
            }
  return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' onChange={handleName}></input>
        <label>Contact</label>
        <input type='number' onChange={handleContact}></input>
        <label>Email</label>
        <input type='email' onChange={handleEmail}></input>
        <label>Password</label>
        <input type='password' onChange={handlePassword}></input>
        <input type='submit'></input>
    </form>
  )
}
