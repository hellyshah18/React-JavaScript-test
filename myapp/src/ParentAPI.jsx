import React, { useState } from 'react'
import Button from '@mui/material/Button';
import  FormwthAPI  from './FormwthAPI';
import DisplaywithAPI from './DisplaywithAPI';



export default function ParentAPI  () {
 
  const [d,setd]= useState(null);
  const [open,setopen]= useState(false);
  

  const handleClose = ()=>{

    setd(null);

    setopen(false);
  }

  const handleOpen= (data)=>{

    setopen(true);

    console.log(data);

  
    setd(data);
  }

  const handleOpenForAdd= ()=>{

    setopen(true);
  }
  return (
    <div>
        
        <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={handleOpenForAdd}
            >
              Add New Item
            </Button>

        <DisplaywithAPI handleOpen={handleOpen} open={open}/>
        <FormwthAPI handleClose={handleClose} open={open} d={d}/>


    </div>
  )
}