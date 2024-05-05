import { Button } from '@mui/material';
import { width } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'

export default function DisplaywithAPI(props) {
    const [data,setData]=useState([]);
    const [id,setId]=useState(0);
    const deleteInfo=(id)=>{
        fetch("https://660268879d7276a755532a05.mockapi.io/users/"+id,{
            method:"Delete"
          }).then(y=>{
            return y.json();
          }).then(y=>{
    
            setId(id);
            console.log(y);
          })
    
    }
    const columns = [
        { field: 'firstname', headerName: 'First Name', width: 150 },
        { field: 'lastname', headerName: 'Last Name', width: 150 },
        {field:'name', headerName:"Name", width:200},
        {
            field:"avatar",
            renderCell : (param)=>{

              return (<img src={param.row.avatar}></img>)
              
            }
        },
        {field: "id" ,headerName : " ",  width:300,  renderCell : (params)=> 
        {
            return (<>
                <Button
                   variant="contained"
                   size="small"
                   style={{ marginLeft: 16 }}
                  onClick={()=>{
                   handleOpen(params.row)
                  }}
                 >
                   Edit
                 </Button>
         
                 <Button
                   variant="contained"
                   size="small"
                   style={{ marginLeft: 16 }}
                   onClick={()=>{
     
                     deleteInfo(params.id);
                   }}
                 >
                   Delete
                 </Button>
               
               
               </>)
        }}]
        useEffect(()=>{

            fetch("https://660268879d7276a755532a05.mockapi.io/users").then(y=>y.json())
            .then(y=>{
              setData(y);
            })
     },[id,open])

    
  return (
    <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={data} columns={columns} />
  </div>
  )
}
