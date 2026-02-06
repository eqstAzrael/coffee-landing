/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
"use client";

import { useState, useEffect, useRef } from "react";
import coffeeData from "../coffeeData.js";

function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef(null);

  const results = coffeeData.filter((coffee) =>
    coffee.name.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <li ref={containerRef} className="relative">
      <div className="flex items-center gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className="p-2"
          aria-label="Поиск"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 text-[#473932] transition-transform duration-300 ${open ? "rotate-360" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <div
          className={`transition-all duration-300 overflow-hidden ${open ? "w-64 opacity-100" : "w-0 opacity-0"}`}
        >
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 text-[#473932] bg-white rounded-full border border-[#473932]/20 focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Результаты */}
          {query && results.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-lg mt-1 z-50 max-h-80 overflow-y-auto">
              {results.map((coffee) => (
                <div
                  key={coffee.id}
                  className="flex items-center gap-10 px-4 py-3 hover:bg-[#F2EAD7]/50 cursor-pointer border-b border-[#473932]/10 last:border-b-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Selected:", coffee.name);
                    setOpen(false);
                    setQuery("");
                  }}
                >
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{coffee.name}</div>
                    <div className="text-sm text-gray-600">
                      ${coffee.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Нет результатов */}
          {query && results.length === 0 && (
            <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-lg mt-1 z-50 px-4 py-3">
              <div className="text-gray-600 text-center">Not Found...</div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default Search;
