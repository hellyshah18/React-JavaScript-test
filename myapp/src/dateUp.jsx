import React, { useState } from 'react'

export const DateUp = () => {

    let a = new Date()
    let b = a.getDate()
    let c=a.getMonth()
    let d=a.getFullYear()
    
    let [date,changeDate] = useState(b);
    let [month, changeMonth] = useState(c);
    let [year, changeYear] = useState(d);
   
    const handleDate = () =>{
        if(date<=30){
            changeDate(date + 1);
            }
            else if(date > 30){
                changeDate(date = 1);
                if(month<12){
                    changeMonth(month + 1);
                }else{
                    changeMonth(month=1);
                     changeYear(year+1);
                }
                 
            }
       
    

    }
  
  return (
    <div>
        DATE : {date} / {month} / {year}
      <button onClick={handleDate}>Next</button>
    </div>
  );
}