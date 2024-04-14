import React, { useEffect, useState } from "react";

export const DisplayData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((y) => y.json())
      .then((y) => setData(y));
  },[]);
  return <div>{
    data.map((value,index)=>{
        return(<div key={index}>{value.body}</div>)
    })
    }</div>;
};
