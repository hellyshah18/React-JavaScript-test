import React, { useState } from 'react'
import { Button } from "@mui/material";
import { Display } from './Display';
import { DialogBox } from './DialogBox';

export const Parent = () => {
    const [data,setData]= useState(null);
  const [open,setOpen]= useState(false);

  const handleOpen = (data) => {
    setOpen(true);
    console.log(data);
    setData(data);
  };
  const handleClose = () => {
    setData(null);
    setOpen(false);
  };

  const handleOpenToAdd = () =>{
    setOpen(true);
  }

  return (
    <div>
      <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={handleOpenToAdd}
            >
              Add New Data
            </Button>

      <DialogBox
        handleClose={handleClose} open={open} data={data}
      />
      <Display
        handleOpen={handleOpen} open={open}
      />
    </div>
  )
}
