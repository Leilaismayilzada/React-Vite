import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3000", 
  timeout: 1000,
});

export const getInfo = async (url, cb) => {
  try {
    const response = await AxiosInstance.get(url);
    cb(response?.data || []);
  } catch (error) {
    console.error("Error fetching data:", error);
    cb([]);
  }
};
