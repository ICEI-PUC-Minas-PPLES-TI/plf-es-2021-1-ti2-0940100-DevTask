import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3001/v1",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
});

export default API