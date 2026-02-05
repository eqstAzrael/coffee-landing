function Header() {
  return (
    <header className="inset-x-0 h-10 flex flex-row items-center justify-between p-10 bg-[#F2EAD7]">
      <h1 className="font-display text-[#473932]">Coffee</h1>
      <ul className="flex flex-row gap-10">
        <li>Home</li>
        <li>Menu</li>
        <li>Media</li>
        <li>Contacts</li>
      </ul>
    </header>
  );
}

export default Header;
