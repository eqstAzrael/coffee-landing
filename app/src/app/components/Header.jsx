"use client";

import { useState } from "react";
import Link from "next/link";
import Search from "./Search";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 bg-[#F2EAD7] shadow-sm">
      <h1 className="font-display text-[#473932] text-2xl z-50">
        <Link href="/">Coffee</Link>
      </h1>

      <nav className="flex items-center gap-4">
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8 text-lg text-[#473932]">
            <li><Link href="/" className="hover:opacity-70 transition-opacity">Home</Link></li>
            <li><Link href="/menu" className="hover:opacity-70 transition-opacity">Menu</Link></li>
            <li><Link href="/about-us" className="hover:opacity-70 transition-opacity">About Us</Link></li>
            <li><Link href="/contacts" className="hover:opacity-70 transition-opacity">Contacts</Link></li>
          </ul>
        </div>

        <Search />

        <button 
          className="lg:hidden p-2 text-[#473932] z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <div className={`fixed inset-0 bg-[#F2EAD7] flex flex-col items-center justify-center transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="flex flex-col items-center gap-8 text-2xl text-[#473932]">
          <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link href="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
          <li><Link href="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li><Link href="/contacts" onClick={() => setIsMenuOpen(false)}>Contacts</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;