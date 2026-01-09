"use client";
import { useState } from "react";
import { useRequestMutation } from "../components/data/UseRequestMutation";
import { Button } from "@mui/material";
import DataBox from "../components/swiper/DataBox";

type NewsItem = {
  id: number;
  name: string;
};

const News = () => {
  const [query, setQuery] = useState("");

  const { data, isMutating, error, trigger } = useRequestMutation("/search");

  const handleSearch = () => {
    if (!query) return;

    trigger({
      params: { query },
      headers: {
        "Accept-Language": "az",
      },
    });
  };

  return (
    <div className="container mx-auto p-9 bg-amber-100">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Axtar..."
      />

      <Button onClick={handleSearch} variant="contained">Search</Button>

      {isMutating && <p>Loading...</p>}
      {error && <p>Error oldu</p>}

      {data?.result?.map((item: NewsItem) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <h1>Info</h1>
      <DataBox/>

    </div>
  );
};

export default News;
