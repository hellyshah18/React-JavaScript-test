import axios from "axios";

export async function getUserData()
{
    const d = await axios.get("https://jsonplaceholder.typicode.com/users");
    return d;
}   