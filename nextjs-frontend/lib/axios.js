import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_BASIC_URL,
  headers: {
    "X-Requested-with": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default axios;