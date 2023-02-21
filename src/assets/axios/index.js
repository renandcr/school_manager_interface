import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8000/school_manager`,
});

export default api;
