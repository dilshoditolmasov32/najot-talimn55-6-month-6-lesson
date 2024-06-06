import axios from "axios";

const API_URL = axios.create({
  baseURL: "http://dummyjson.com",
});

export default API_URL;
