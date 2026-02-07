import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <main className="bg-[#F2EAD7] min-h-screen overflow-x-hidden">
      <div className="w-full bg-[#E2BFA1]">
        <svg
          className="w-full h-8 md:h-12 lg:h-15 rotate-180"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z"
            fill="#F2EAD7"
          />
        </svg>

        <section className="relative flex flex-col lg:flex-row justify-between items-center px-6 py-12 md:p-16 lg:p-20 gap-10 max-w-7xl mx-auto">
          <div className="order-2 lg:order-1 relative w-full max-w-md lg:max-w-xl">
            <Image
              src="/Equipment.jpg"
              alt="Coffee beans and equipment"
              width={600}
              height={600}
              className="rounded-3xl shadow-2xl w-full object-cover"
              priority
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center items-center lg:items-start gap-6 md:gap-8 max-w-2xl text-center lg:text-left">
            <h1 className="font-light text-2xl md:text-3xl lg:text-4xl tracking-widest">
              OUR STORY <br />
              <span className="text-white text-5xl md:text-7xl lg:text-8xl font-bold block mt-2">
                BEAN TO CUP
              </span>
            </h1>
            <p className="text-[#452812] text-base md:text-lg lg:text-xl leading-relaxed">
              Since 2010, we've been passionate about bringing the finest coffee
              experience to every cup. From sourcing ethical beans to perfecting
              each roast, our journey is about more than coffee - it's about community.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full">
              <Link
                href="/menu"
                className="bg-[#492923] text-white text-lg rounded-full px-8 py-3 hover:bg-[#321d0d] transition-all transform hover:scale-105"
              >
                OUR MENU
              </Link>
              <Link
                href="/contacts"
                className="border-2 border-[#492923] text-[#492923] text-lg rounded-full px-8 py-3 hover:bg-[#492923] hover:text-white transition-all"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </section>

        <svg
          className="w-full h-8 md:h-12 lg:h-15"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z"
            fill="#F2EAD7"
          />
        </svg>
      </div>

      <section className="flex flex-col items-center py-16 px-6 md:py-24 gap-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-[#452812] text-center">
          OUR VALUES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <article className="bg-white p-8 rounded-3xl shadow-md flex flex-col items-center text-center gap-5 hover:shadow-xl transition-shadow">
            <Image src="/green.jpg" width={150} height={150} alt="Sustainability" className="rounded-full object-cover aspect-square" />
            <h3 className="text-2xl font-bold text-[#452812]">Ethical Sourcing</h3>
            <p className="text-[#473932] leading-relaxed">
              We work directly with farmers who practice sustainable agriculture,
              ensuring fair wages and environmental responsibility.
            </p>
          </article>

          <article className="bg-white p-8 rounded-3xl shadow-md flex flex-col items-center text-center gap-5 hover:shadow-xl transition-shadow">
          <Image src="/roast.jpg" width={150} height={150} alt="Craftmanship" className="rounded-full object-cover aspect-square" />
            <h3 className="text-2xl font-bold text-[#452812]">Artisan Roasting</h3>
            <p className="text-[#473932] leading-relaxed">
              Each batch is small-roasted by our master roasters to highlight
              unique flavor profiles and ensure freshness.
            </p>
          </article>

          <article className="bg-white p-8 rounded-3xl shadow-md flex flex-col items-center text-center gap-5 hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
            <Image src="/community.jpg" width={150} height={150} alt="Connection" className="rounded-full object-cover aspect-square" />
            <h3 className="text-2xl font-bold text-[#452812]">Community First</h3>
            <p className="text-[#473932] leading-relaxed">
              We believe coffee brings people together. Our cafes are spaces
              for connection, creativity, and conversation.
            </p>
          </article>
        </div>
      </section>

      <div className="bg-[#E2BFA1]">
        <svg
          className="w-full h-8 md:h-12 lg:h-15 rotate-180"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z"
            fill="#F2EAD7"
          />
        </svg>

        <section className="flex flex-col items-center py-16 px-6 md:py-24 gap-12 max-w-7xl mx-auto text-white">
          <h2 className="font-bold text-3xl md:text-5xl text-center">MEET OUR TEAM</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            <article className="bg-[#F2EAD7] rounded-3xl p-8 flex flex-col items-center gap-4 shadow-lg transform transition-all hover:-translate-y-2">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-[#492923] rounded-full flex items-center justify-center text-5xl md:text-6xl shadow-inner">
                👨‍🍳
              </div>
              <h3 className="text-2xl font-bold text-[#452812]">Alex Morgan</h3>
              <p className="text-[#473932] font-semibold">Head Roaster</p>
              <p className="text-[#473932] text-center text-sm leading-relaxed">
                10+ years of experience in artisan coffee roasting.
              </p>
            </article>

            <article className="bg-[#F2EAD7] rounded-3xl p-8 flex flex-col items-center gap-4 shadow-lg transform transition-all hover:-translate-y-2">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-[#492923] rounded-full flex items-center justify-center text-5xl md:text-6xl shadow-inner">
                👩‍💼
              </div>
              <h3 className="text-2xl font-bold text-[#452812]">Maria Silva</h3>
              <p className="text-[#473932] font-semibold">Coffee Sourcer</p>
              <p className="text-[#473932] text-center text-sm leading-relaxed">
                Direct relationships with farmers across 3 continents.
              </p>
            </article>

            <article className="bg-[#F2EAD7] rounded-3xl p-8 flex flex-col items-center gap-4 shadow-lg transform transition-all hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-[#492923] rounded-full flex items-center justify-center text-5xl md:text-6xl shadow-inner">
                👨‍💻
              </div>
              <h3 className="text-2xl font-bold text-[#452812]">David Chen</h3>
              <p className="text-[#473932] font-semibold">Barista Trainer</p>
              <p className="text-[#473932] text-center text-sm leading-relaxed">
                National latte art champion & brewing expert.
              </p>
            </article>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full max-w-4xl">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-[#F2EAD7]">500+</div>
              <p className="text-[#452812] font-medium">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-[#F2EAD7]">12</div>
              <p className="text-[#452812] font-medium">Years Active</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-[#F2EAD7]">30+</div>
              <p className="text-[#452812] font-medium">Varieties</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-[#F2EAD7]">3</div>
              <p className="text-[#452812] font-medium">Awards</p>
            </div>
          </div>

          <Link
            href="/contacts"
            className="mt-8 bg-[#492923] text-white text-xl rounded-full px-12 py-4 hover:bg-[#321d0d] transition-all transform hover:scale-105 shadow-xl"
          >
            VISIT OUR CAFE
          </Link>
        </section>
      </div>
    </main>
  );
}

export default AboutUs;
