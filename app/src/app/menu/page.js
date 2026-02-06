/** biome-ignore-all lint/performance/noImgElement: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */

'use client';

import { useState } from "react";
import SearchIcon from "../components/icons/SearchIcon";
import coffeeData from "../coffeeData";


function Menu() {
    const [query, setQuery] = useState('');

    const filteredCoffee = coffeeData.filter(coffee =>
        coffee.name.toLowerCase().includes(query.toLowerCase()) ||
        coffee.description?.toLowerCase().includes(query.toLowerCase())
    );    

  return (
    <main className="bg-[#E2BFA1]">
      <svg
        className="top-0 left-0 w-full h-15 rotate-180"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z"
          fill="#F2EAD7"
        />
      </svg>

      <section className="min-h-screen flex flex-col items-center p-10 gap-10 ">
        <h1 className="font-bold text-[#ffffff]">COFFEE FOR YOUR SOUL</h1>
        <div className="flex flex-row items-center p-3 border-2 rounded-3xl gap-10 border-[#fcf8f0]">
         <input placeholder="What’s Brewing in Your Heart?" className="w-100 focus:outline-none" value={query} onChange={(e) => (setQuery(e.target.value))}/>
        <SearchIcon />   
        </div>
        <div className="grid grid-cols-3 gap-30 p-4">
            {filteredCoffee.map(coffee => (
                <div 
                    key={coffee.id} 
                    className="bg-[#F2EAD7] p-4 rounded-3xl w-50 shadow-md flex flex-col items-center"
                >
                    <img 
                        src={coffee.image} 
                        alt={coffee.name} 
                        className="w-32 h-32 object-cover rounded-md mb-3"
                    />
                    <h3 className="text-[#473932] text-xl font-semibold mb-1">
                        {coffee.name}
                    </h3>
                    <p className="text-[#473932] text-lg mb-3">
                        ${coffee.price.toFixed(2)}
                    </p>
                    <button className="bg-[#E2BFA1] text-[#473932] px-6 py-2 rounded-3xl font-bold hover:opacity-90">
                        BUY
                    </button>
                </div>
            ))}
        </div>
      </section>

      <svg
        className="top-0 left-0 w-full h-15"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z"
          fill="#452812"
        />
      </svg>
    </main>
  );
}

export default Menu;
