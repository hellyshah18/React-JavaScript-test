import { Button, Drawer } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import LeadForm  from './LeadForm';
import { LeadGrid } from './LeadGrid';

export const Lead = () => {
    const [open,setOpen]=useState(false);

    const drawer=(newOpen)=>()=>{
        setOpen(newOpen);
    }
  return (
    <div>
        <Button onClick={drawer(true)}>Open Drawer</Button>
        <Drawer  open={open} onClose={drawer(false)} anchor='right'>
        <LeadForm/>
        </Drawer>
        {/*<LeadGrid open={open}/> */}
    </div>
  )
}
