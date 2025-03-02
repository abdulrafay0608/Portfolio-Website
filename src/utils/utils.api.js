import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api-abdulrafay-developer.vercel.app/api/v1",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json,text/plain,",
  },
});
