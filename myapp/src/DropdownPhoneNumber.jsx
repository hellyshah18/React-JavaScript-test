import React,{ useState } from 'react'

export const DropdownPhoneNumber = () => {
    const [data, setdata] = useState({
        contact: "Home",
        FullName: "",
        number: "",
      });
    
      const handleinput = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
      };
    
      const handlesubmit = (e) => {
        e.preventDefault();
        console.log(data);
      };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        {/* <div name="contact"> */}
        <label>Contact On : </label>
        <select onChange={handleinput} name="contact"> 
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="Phone">Phone</option>
        </select>
        <input type="number" name="number" onChange={handleinput} />
        {/* </div> */}

        <br />
        <br />
        <label>Full Name : </label>
        <input type="text" name="FullName" onChange={handleinput} />

        <br />
        <br />
        <button type="submit" value="Save" >save</button>
      </form>
    </div>
  )
}