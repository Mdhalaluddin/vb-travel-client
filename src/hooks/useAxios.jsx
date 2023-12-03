import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'https://vb-travel-server.vercel.app'
}) 
const useAxios = () => {
    return axiosSecure;
};

export default useAxios;