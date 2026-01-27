import axios from "axios"
const BASE_URL = import.meta.env.VITE_BACKEND_URL;
// for admin
export const Client = axios.create({
    baseURL: `${BASE_URL}/api/v1/admin`
})

// for public

export const Api = axios.create({
    baseURL:`${BASE_URL}/api/v1/public`
})