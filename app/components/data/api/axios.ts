import axios from "axios";

const api = axios.create({
  baseURL: "https://mygov-api.e-gov.az/dg-compositor-gateway/api/v1/",
});

export default api;
