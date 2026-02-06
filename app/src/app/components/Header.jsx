import Link from "next/link";
import Search from "./Search";

function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-10 bg-[#F2EAD7]">
      <h1 className="font-display text-[#473932] text-2xl">Coffee</h1>
      <ul className="flex items-center gap-8 text-lg">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/menu">Menu</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
        <li>Contacts</li>
        <Search />
      </ul>
    </header>
  );
}

export default Header;
