import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { DisplayUsingDialogBox } from './DisplayUsingDialogBox';
import { EmployeeForm } from './EmployeeForm';

export default function Parent(){

    const [data,SetData]= useState([]);
    const [open,setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <div>
        <Button variant="outlined" onClick={handleClickOpen} >
        Open form dialog
      </Button>

      
      <EmployeeForm open={open}   handleClose={handleClose} data={data} SetData={SetData}/>
      <DisplayUsingDialogBox data={data}/>

    </div>
  )
}
