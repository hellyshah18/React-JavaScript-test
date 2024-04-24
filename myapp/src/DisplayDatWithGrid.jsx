import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function DisplayDatWithGrid (props){
    const columns = [

        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
      ]

      console.log(props);
  return (
    <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={props.data} columns={columns} />
  </div>
  )
}
