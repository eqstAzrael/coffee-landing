function Footer() {
  return (
    <footer className="w-full flex flex-row justify-evenly  bg-[#452812] text-[#F2EAD7] font-extralight p-10">
        <ul className="flex flex-col gap-2">
            <h2>Category</h2>
            <li>Weekly Pick</li>
        </ul>
        <ul className="flex flex-col gap-2">
            <h2>Company Info</h2>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Support</li>
        </ul>
        <ul className="flex flex-col gap-2">
            <h2>Follow us</h2>
           
        </ul>
    </footer> 
  );
}

export default Footer;
