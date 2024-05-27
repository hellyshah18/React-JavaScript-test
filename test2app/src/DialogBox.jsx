import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";


export const DialogBox = (props) => {
    const { open, handleClose, data } = props;

    const [employee, setEmployee] = useState({
      firstname: "",
      lastname: "",
      email:'',

    });

    console.log(employee);

  useEffect(() => {
    if (data) {
      setEmployee({ ...data, firstname: data.firstname, lastname: data.lastname });
    }
    console.log(data);
  }, [data]);
  const handleSave = () => {
    let baseurl ='https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee'
    
    let url = data
      ? `https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee/${employee.id}`
      : baseurl;
    fetch(url, {
       method: data ? "PUT" : "POST",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((y) => y.json())
      .then((y) => {
        setData({ firstname: "", lastname: "" ,email:''});
        handleClose();
        //  setEmployee(y);
      });

 
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
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
      <DialogTitle>Add new Employee</DialogTitle>
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
          label="First Name"
          type="text"
          fullWidth
          value={employee?.firstname}
          variant="standard"
          onChange={handleChange}
        />

        <TextField
          autoFocus
          required
          margin="dense"
          id="lastname"
          name="lastname"
          label="Last Name"
          type="text"
          fullWidth
          value={employee?.lastname}
          variant="standard"
          onChange={handleChange}
        />
         <TextField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Email"
          type="text"
          fullWidth
          value={employee?.email}
          variant="standard"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="button" onClick={handleSave}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};


  

