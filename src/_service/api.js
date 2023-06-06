import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "http://webapp353621.ip-45-79-142-173.cloudezapp.io",
});

export default api;
