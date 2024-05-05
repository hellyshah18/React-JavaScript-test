import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function FormwthAPI(props) {
    const {open,handleClose,d} = props;
    const [data,setdata]= useState({
        firstname : "",
        lastname : "",

    })
    useEffect(()=>{
         if(d)
        {
           
            setdata({...d,firstname:d.firstname,lastname: d.lastname});
        }
    },[d])

    const handleSave = ()=>{

        let url =  d? `https://660268879d7276a755532a05.mockapi.io/users/${data.id}` : "https://660268879d7276a755532a05.mockapi.io/users"
        fetch(url,{
          method:d? "PUT" : "POST",
          body: JSON.stringify(data),
          headers: {
            'Content-Type':"Application/json"
          }
        }).then(y=>y.json())
      .then(y=>{
  
        setdata({firstname: "",lastname:""});
        handleClose();
      //  setData(y);
      })
  
      }
  
      const handleChange = (e)=>{


        setdata({...data,[e.target.name]: e.target.value});

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
        console.log(email);
        handleClose();
      },
    }}
  >
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
      <TextField
        autoFocus
        required
        margin="dense"
        id="firstname"
        name="firstname"
        label="firstname"
        type="text"
        fullWidth
        value={data?.firstname}
        variant="standard"
        onChange={handleChange}
      />
       <TextField
        autoFocus
        required
        margin="dense"
        id="lastname"
        name="lastname"
        label="last name"
        type="text"
        value={data?.lastname}
        fullWidth
        variant="standard"
        onChange={handleChange}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button type="button" onClick={handleSave}>Subscribe</Button>
    </DialogActions>
  </Dialog>
  )
}