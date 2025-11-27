import axios from "axios";
const AUTH_BASE_URL = "https://resto-nest-backend-1.onrender.com/api/auth";

export const registerUser = async (data: {
    name: string;
    email: string;
    password: string;
}) => {
    const response = await axios.post(`${AUTH_BASE_URL}/register`, data);
    return response.data;
};

export const loginUser = async (data: {
    email: string;
    password: string;
}) => {
    const response = await axios.post(`${AUTH_BASE_URL}/login`, data);
    return response.data;
};
