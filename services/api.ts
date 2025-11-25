import axios from "axios";
const api = "https://resto-nest-backend-1.onrender.com/api/auth/register";

export const registerUser = async (data:{
    name: string;
    email: string;
    password: string;

}) =>{
    const response = await axios.post(`${api}`, data);
    return response.data;
}
export const loginUser = async (data:{
    name: string;
    email: string;
    password: string;
}) =>{
    const response = await axios.post(`${api}/login`, data);
}
