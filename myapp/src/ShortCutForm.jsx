import React, { useState } from 'react'

export const ShortCutForm = () => {
    const[data,setValue]= useState({
        Name:"",
        Contact:'',
        Email:"",
        Password:""
    })
    const handleInput=(e)=>{
        setValue({...data,[e.target.name]:e.target.value})
        }
        const handleSubmit=(e)=>{
            e.preventDefault()
            console.log(data)
            }
  return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' name='Name' onChange={handleInput}></input>
        <label>Contact</label>
        <input type='number' name='Contact' onChange={handleInput}></input>
        <label>Email</label>
        <input type='email' name='Email' onChange={handleInput}></input>
        <label>Password</label>
        <input type='password' name='Password' onChange={handleInput}></input>
        <input type='submit'></input>
    </form>
  )
}
