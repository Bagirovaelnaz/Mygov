import { AxiosError, AxiosRequestConfig } from "axios";
import useSWRMutation from "swr/mutation";
import { axiosFetcher } from "./api/fetcher";

export function useRequestMutation<T>(url: string) {
  const { data, error, isMutating, trigger }: any = useSWRMutation<
    T,
    AxiosError,
    string,
    AxiosRequestConfig | undefined
  >(
    url,
    (url, { arg }) => {
      const params = arg || {};
      return axiosFetcher<T>(url, {
        method: "GET", 
        ...params,
      });
    }
  );

  return {
    data,
    error,
    isMutating,
    trigger,
  };
}
