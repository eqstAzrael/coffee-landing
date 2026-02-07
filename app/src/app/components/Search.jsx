"use client";

import { useState, useEffect, useRef } from "react";
import coffeeData from "../coffeeData.js";
import Link from "next/link.js";

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

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative flex items-center">
      <div className="flex items-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className="p-2 flex items-center justify-center hover:bg-[#473932]/5 rounded-full transition-colors"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 text-[#473932] transition-transform duration-300 ${open ? "rotate-90" : ""}`}
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
          className={`transition-all duration-300 overflow-hidden ${
            open ? "w-40 sm:w-64 opacity-100 ml-2" : "w-0 opacity-0"
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-1.5 text-[#473932] bg-white rounded-full border border-[#473932]/20 focus:outline-none focus:border-[#473932]/50 text-sm"
          />
        </div>
      </div>

      {open && query && (
        <div className="absolute top-12 right-0 w-64 sm:w-72 bg-white rounded-xl shadow-xl mt-1 z-[60] max-h-[70vh] overflow-y-auto border border-[#473932]/10">
          {results.length > 0 ? (
            results.map((coffee) => (
              <Link 
                key={coffee.id} 
                href={`/coffee/${coffee.id}`}
                onClick={() => {
                  setOpen(false);
                  setQuery("");
                }}
              >
                <div className="flex items-center gap-4 px-4 py-3 hover:bg-[#F2EAD7]/50 transition-colors border-b border-[#473932]/5 last:border-b-0">
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-10 h-10 rounded-full object-cover shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-[#473932] truncate">{coffee.name}</div>
                    <div className="text-sm text-gray-500">
                      ${coffee.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="px-4 py-6 text-gray-500 text-center text-sm">
              No results found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;