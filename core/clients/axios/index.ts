import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { ApiResponse } from "../../../api";

export interface ApiInstanceError extends AxiosError<ApiResponse<any>> {}

export const ApiInstnace = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST_URL,
});

ApiInstnace.interceptors.request.use(function (config) {
  const token = Cookies.get("token");
  // @ts-ignore
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export const apiInstanceFetcher = (url: string) =>
  ApiInstnace.get(url).then((res) => res.data);
