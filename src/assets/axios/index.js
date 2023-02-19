import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8000/konia_project`,
});

export default api;
