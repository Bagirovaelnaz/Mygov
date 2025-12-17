import { useEffect, useState } from "react";

const useSearch = <T,>(
  url: string,
  queryParam: string = "query"
) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!search) return;

    const controller = new AbortController();

    setLoading(true);
    setError(null);

    fetch(`${url}?${queryParam}=${search}&csrt=17893355420925143115`, {
      signal: controller.signal,
      headers: {
        "Accept-Language": "az"
      }
    })
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => {
        if (err.name !== "AbortError") {
          setError("Xəta baş verdi");
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [search, url, queryParam]);


  return { search, setSearch, data, loading, error };
};

export default useSearch;