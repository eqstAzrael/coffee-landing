/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Premium Coffee House',
  description: 'Have questions? Get in touch with our coffee experts or visit our cozy spot.',
};

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-[#E2BFA1] pb-16">

      <div className="w-full overflow-hidden leading-[0] rotate-180" aria-hidden="true">
        <svg
          className="relative block w-full h-10"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z"
            fill="#F2EAD7"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#473932] mb-4">Get in Touch</h1>
          <p className="text-[#452812] text-lg max-w-2xl mx-auto">
            Whether you have a question about our beans, want to book a table, 
            or just want to say hi — we’re here for you.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          
          <section className="flex-1 bg-[#F2EAD7] p-8 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-[#473932] mb-8">Contact Information</h2>
            
            <address className="not-italic space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#E2BFA1] p-3 rounded-2xl text-[#452812]" aria-hidden="true">
                  <LocationIcon />
                </div>
                <div>
                  <h3 className="font-bold text-[#473932]">Our Location</h3>
                  <p className="text-[#452812]">123 Espresso Street, Brew City, BC 50210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#E2BFA1] p-3 rounded-2xl text-[#452812]" aria-hidden="true">
                  <PhoneIcon />
                </div>
                <div>
                  <h3 className="font-bold text-[#473932]">Phone Number</h3>
                  <a href="tel:+1234567890" className="text-[#452812] hover:underline">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#E2BFA1] p-3 rounded-2xl text-[#452812]" aria-hidden="true">
                  <EmailIcon />
                </div>
                <div>
                  <h3 className="font-bold text-[#473932]">Email Address</h3>
                  <a href="mailto:hello@coffeehouse.com" className="text-[#452812] hover:underline">hello@coffeehouse.com</a>
                </div>
              </div>
            </address>

            <div className="mt-12 pt-8 border-t border-[#E2BFA1]">
              <h3 className="font-bold text-[#473932] mb-4">Opening Hours</h3>
              <ul className="space-y-2 text-[#452812]">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 8:00 PM</span></li>
                <li className="flex justify-between"><span>Sat - Sun:</span> <span>9:00 AM - 10:00 PM</span></li>
              </ul>
            </div>
          </section>

          <section className="flex-[1.5] bg-[#F2EAD7] p-8 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-[#473932] mb-8">Send us a Message</h2>
            
            <form action="#" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-semibold text-[#473932] ml-1">Full Name</label>
                  <input 
                    id="name"
                    type="text" 
                    placeholder="John Doe"
                    className="bg-[#E2BFA1]/30 border-2 border-[#E2BFA1] rounded-2xl px-5 py-3 outline-none focus:border-[#452812] transition-colors placeholder-[#473932]/50"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-semibold text-[#473932] ml-1">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="john@example.com"
                    className="bg-[#E2BFA1]/30 border-2 border-[#E2BFA1] rounded-2xl px-5 py-3 outline-none focus:border-[#452812] transition-colors placeholder-[#473932]/50"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-semibold text-[#473932] ml-1">Subject</label>
                <select 
                  id="subject"
                  className="bg-[#E2BFA1]/30 border-2 border-[#E2BFA1] rounded-2xl px-5 py-3 outline-none focus:border-[#452812] transition-colors appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Wholesale Partnerships</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold text-[#473932] ml-1">Message</label>
                <textarea 
                  id="message"
                  rows="5"
                  placeholder="How can we help you?"
                  className="bg-[#E2BFA1]/30 border-2 border-[#E2BFA1] rounded-2xl px-5 py-3 outline-none focus:border-[#452812] transition-colors placeholder-[#473932]/50 resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#452812] text-white py-4 rounded-3xl font-bold text-lg hover:bg-[#351f0e] transition-all shadow-md active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </section>

        </div>
      </div>
    </main>
  );
}

function LocationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  );
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  );
}
