import axios from 'axios'

let token=JSON.parse(localStorage.getItem(token)).token;
const authFetch= axios.create({
    baseURL:'http://127.0.0.1:5001/api',
    header:{
        Accept:'application/json',
        Authorization: token
    }
})
export default authFetch;