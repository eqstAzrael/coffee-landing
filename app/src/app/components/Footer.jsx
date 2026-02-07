import InstagramIcon from "./icons/InstagramIcon.jsx";
import FacebookIcon from "./icons/FacebookIcon.jsx";
import YouTubeIcon from "./icons/YouTubeIcon.jsx";

function Footer() {
  return (
    <footer className="w-full bg-[#452812] text-[#F2EAD7] p-10 font-extralight">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-evenly gap-10 md:gap-4 text-center md:text-left">
        <section>
          <h2 className="font-semibold mb-4 text-lg">Category</h2>
          <ul className="flex flex-col gap-2">
            <li>Weekly Pick</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold mb-4 text-lg">Company Info</h2>
          <ul className="flex flex-col gap-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Support</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold mb-4 text-lg">Follow us</h2>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://instagram.com/" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <InstagramIcon size={28} />
            </a>
            <a href="https://facebook.com/" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
              <FacebookIcon size={28} />
            </a>
            <a href="https://youtube.com/" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
              <YouTubeIcon size={28} />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;