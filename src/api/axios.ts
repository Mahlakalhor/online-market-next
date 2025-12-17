import axios from "axios";

const instance = axios.create({
  baseURL: "https://greencart-server.greatstack.in",

  headers: { "Content-Type": "application/json" },
});

export default instance;
