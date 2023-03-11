import axios from "axios";

const api = axios.create({
  baseURL: `https://schoolmanagerapi-production.up.railway.app/school_manager`,
});

export default api;
