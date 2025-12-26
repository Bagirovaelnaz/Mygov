import axios, { AxiosRequestConfig } from "axios";
import api from "./axios";

export const axiosFetcher = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {


  return api({ url, ...config }).then(res => res.data);
};
