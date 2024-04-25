import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { EmployeeForm } from './EmployeeForm';
import DisplayDatWithGrid from './DisplayDatWithGrid';

export default function Parent(){

    const [data,SetData]= useState([]);
    const [open,setOpen] = useState(false);
    const [index,setIndex]= useState(-1);

    const handleClickOpen = () => {
        setOpen(true);
      };

      const deleteEmp = (index)=>{
        let p = [...data];
        p.splice(index,1);
         SetData(p);
      }
      
      const editEmp = (index)=>{
         setOpen(true);
        setIndex(index);

      }
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <div>
        <Button variant="outlined" onClick={handleClickOpen} >
        Open form dialog
      </Button>

      
      <EmployeeForm open={open}   handleClose={handleClose} data={data} SetData={SetData} index={index} setIndex={setIndex}/>
      <DisplayDatWithGrid data={data} deleteEmp={deleteEmp} editEmp={editEmp}/>

    </div>
  )
}
