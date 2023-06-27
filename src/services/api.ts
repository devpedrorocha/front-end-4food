import axios, { AxiosInstance } from "axios";

const api = axios.create({
  baseURL: "https://back4food-1ifogmmqz-lorenzocoracini.vercel.app",
}) as AxiosInstance;

export { api };
