import axios, { AxiosInstance } from "axios";

const api = axios.create({
  baseURL: "https://back4food-oxcrjgzy5-lorenzocoracini.vercel.app",
}) as AxiosInstance;

export { api };
