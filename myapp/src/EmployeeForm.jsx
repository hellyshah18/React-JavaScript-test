import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const EmployeeForm = (props) => {
  const {open,handleClose,data,SetData,index,setIndex} = props;
   
      const [form,setform]= useState({
        firstName: "",
        lastName :"",
        id:0
    
      });
      const handleChange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
      }
      useEffect(()=>{

        if(index >=0)
        {
          setform(data[index])
        }
        else
        {
          setform({
            firstName:"",
            lastName : "",
            id:0
          })
        }
    
      },[index,open])
      const handleSave = ()=>{

        let p =[...data];
        p.push({...form,id: p.length});
        SetData(p);
        handleClose();
      }
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    PaperProps={{
      component: 'form',
      onSubmit: (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const email = formJson.email;
    
        handleClose();
      },
    }}
  >
    <DialogTitle>Save Details</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your first name and last name here. We
        will send updates occasionally.
      </DialogContentText>
      <TextField
        autoFocus
        required
        margin="dense"
        id="firstName"
        name="firstName"
        label="firstName"
        type="text"
        fullWidth
        variant="standard"
        onChange={handleChange}
      />
       <TextField
        autoFocus
        required
        margin="dense"
        id="lastName"
        name="lastName"
        label="last Name"
        type="text"
        fullWidth
        variant="standard"
        onChange={handleChange}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button type="button" onClick={handleSave}>Save</Button>
    </DialogActions>
  </Dialog>
  )
}
