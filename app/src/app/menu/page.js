'use client';

import { useState } from "react";
import Image from "next/image";
import SearchIcon from "../components/icons/SearchIcon";
import coffeeData from "../coffeeData";
import Link from "next/link";

function Menu() {
    const [query, setQuery] = useState('');

    const filteredCoffee = coffeeData.filter(coffee =>
        coffee.name.toLowerCase().includes(query.toLowerCase()) ||
        coffee.description?.toLowerCase().includes(query.toLowerCase())
    );    

  return (
    <main className="bg-[#E2BFA1] min-h-screen overflow-x-hidden flex flex-col">

      <div className="w-full bg-[#F2EAD7] shrink-0">
        <svg className="w-full h-10" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z" fill="#E2BFA1" />
        </svg>
      </div>

      <section className="flex-1 flex flex-col items-center py-12 px-6 gap-12 w-full max-w-7xl mx-auto">
        <h1 className="font-black text-white text-3xl md:text-5xl lg:text-6xl text-center uppercase tracking-tighter">
          COFFEE FOR YOUR SOUL
        </h1>
        

        <div className="flex items-center p-2 bg-white rounded-2xl w-full max-w-2xl shadow-xl gap-4 border-4 border-[#F2EAD7]">
         <input 
            placeholder="Search your favorite brew..." 
            className="flex-1 p-3 bg-transparent text-[#473932] font-semibold focus:outline-none text-lg" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="bg-[#F2EAD7] p-3 rounded-xl text-white shadow-md">
            <SearchIcon />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-center justify-items-center">
            {filteredCoffee.length > 0 ? (
              filteredCoffee.map(coffee => (
                <article 
                    key={coffee.id} 
                    className="bg-[#F2EAD7] p-8 rounded-[2.5rem] shadow-lg flex flex-col items-center transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl group w-full max-w-[320px]"
                >
                    <div className="relative w-40 h-40 mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Image 
                          src={coffee.image} 
                          alt={coffee.name} 
                          fill
                          className="object-contain"
                      />
                    </div>
                    <h3 className="text-[#473932] text-2xl font-bold mb-2 text-center">
                        {coffee.name}
                    </h3>
                    <p className="text-[#452812] text-xl font-black mb-6">
                        ${coffee.price.toFixed(2)}
                    </p>
                    <Link 
                      href={`/coffee/${coffee.id}`}
                      className="w-full bg-[#E2BFA1] text-[#473932] py-4 rounded-2xl font-black text-center hover:bg-[#452812] hover:text-white transition-all shadow-md tracking-widest uppercase"
                    >
                      ORDER NOW
                    </Link>
                </article>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-white text-2xl font-light opacity-80 italic">No coffee found matching your search.</p>
              </div>
            )}
        </div>
      </section>

      <div className="w-full bg-[#452812] mt-auto">
        <svg className="w-full h-10 rotate-180" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z" fill="#E2BFA1" />
        </svg>
      </div>
    </main>
  );
}

export default Menu;