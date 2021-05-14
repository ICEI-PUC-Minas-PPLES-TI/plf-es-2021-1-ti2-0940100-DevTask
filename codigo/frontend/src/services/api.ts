import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3200/v1" });

export default API