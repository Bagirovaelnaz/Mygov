"use client";
const words = ["cəmiyyət", "xidmətlər"];
import { useEffect, useState } from "react";
import UseSearch from "../hooks/UseSearch";
import TypingEffect from "../hooks/TypingHook";

type SearchItem = {
  id: string;
  name: string;
  key: any;
  result: string;
};

type SearchResponse = {
  my_info?: SearchItem[];
  payments?: SearchItem[];
  entities?: SearchItem[];
  services?: SearchItem[];
  life_events?: SearchItem[];
  categories?: SearchItem[];
  events?: SearchItem[];
};

const SearchSection = () => {
  const [inputValue, setInputValue] = useState("");

  const { search, setSearch, data, loading, error } = UseSearch<any>(
    "https://mygov-api.e-gov.az/dg-compositor-gateway/api/v1/search",
    "query"
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      if (inputValue.length >= 3) {
        setSearch(inputValue);
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [inputValue, setSearch]);

  const resourceTitles: Record<keyof SearchResponse, string> = {
    my_info: "Məlumatlarım",
    payments: "Ödənişlər",
    entities: "Kategoriyalar",
    services: "Xidmətlər",
    life_events: "Həyat hadisələri",
    categories: "Kategoriyalar",
    events: "Hadisələr",
  };
  const resources = data?.result;

  return (
    <div className=" search">
      <h1>
        Müasir innovasiyalar sahəsində yaradıcı <br /> və innovativ
        <TypingEffect words={words} speed={150} delayBetweenWords={1000} />
      </h1>

      <div className="p-7">
        <input
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Portal üzrə axtarış edin"
          className="block w-[90%] p-4 ps-9 rounded-[32px] bg-[#fff]  shadow-xs mx-auto  "
        />
      </div>
      <div>
        <div>
          {resources &&
            search?.length > 3 &&
            (
              Object.entries(resourceTitles) as [keyof SearchResponse, string][]
            ).map(([resource, title]) => {
              const filteredItems = resources.filter(
                (item: any) => item?.resource === resource
              );

              if (filteredItems.length === 0) return null;

              return (
                <div key={resource} className="item-list">
                  <h3>{title}</h3>

                  {filteredItems.map((item: any) => (
                    <div key={item.id}>{item.name}</div>
                  ))}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
