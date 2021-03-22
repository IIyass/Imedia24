import axios from 'axios';


 const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_POKEMON,
  timeout: 10000000,
  headers: {
    contentType: 'application/json',
    accept: 'application/json',
  },
});

export default axiosInstance