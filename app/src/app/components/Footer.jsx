/** biome-ignore-all assist/source/organizeImports: <explanation> */
import InstagramIcon from "./icons/InstagramIcon.jsx";
import FacebookIcon from "./icons/FacebookIcon.jsx";
import YouTubeIcon from "./icons/YouTubeIcon.jsx";

function Footer() {
  return (
    <footer className="w-full flex flex-row justify-evenly  bg-[#452812] text-[#F2EAD7] p-10 font-extralight">
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
        <div className="flex gap-4">
          <a href="https://instagram.com/" aria-label="Instagram">
            <InstagramIcon size={28} />
          </a>
          <a href="https://facebook.com/" aria-label="Facebook">
            <FacebookIcon size={28} />
          </a>
          <a href="https://youtube.com/" aria-label="YouTube">
            <YouTubeIcon size={28} />
          </a>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
