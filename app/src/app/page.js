import Image from "next/image";
import CoffeeList from "./components/CoffeeList";
import BlogsList from "./components/BlogsList";
import Link from "next/link";

function Page() {
  return (
    <main className="bg-[#F2EAD7] overflow-x-hidden">
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

        <section className="relative flex flex-col lg:flex-row justify-between items-center px-6 py-12 md:p-20 lg:p-30 gap-10">
          <div className="flex flex-col justify-center items-center lg:items-start gap-6 md:gap-10 z-10">
            <h1 className="text-center lg:text-left font-light text-2xl md:text-4xl tracking-widest">
              FRESHLY ROASTED <br />
              <span className="text-white text-6xl md:text-7xl lg:text-8xl font-bold block mt-2">
                COFFEE
              </span>
            </h1>
            <Link 
              href="/menu" 
              className="bg-[#492923] text-center text-2xl md:text-4xl text-white rounded-full px-10 py-3 hover:bg-[#321d0d] transition-all transform hover:scale-105 active:scale-95"
            >
              SHOP    
            </Link>
          </div>
          
          <div className="relative w-full max-w-[300px] md:max-w-[450px] lg:max-w-[500px]">
            <Image
              src="/coffee.png"
              alt="Fresh Coffee Beans"
              width={736 / 1.5}
              height={736 / 1.5}
              priority
              className="object-contain"
            />
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

      <section className="relative min-h-screen flex flex-col items-center py-16 px-4 md:py-20 gap-12 md:gap-15">
        <h2 className="text-3xl md:text-5xl font-light text-[#452812]">TOP CATEGORIES</h2>
        <CoffeeList />
        
        
      </section>
      <div className="w-full mt-auto pt-10">
                <svg
                  className="w-full h-8 md:h-12 lg:h-15"
                  viewBox="0 0 1200 40"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z"
                    fill="#E2BFA1"
                  />
                </svg>
      </div>
      <section className="min-h-screen flex flex-col gap-12 md:gap-15 bg-[#E2BFA1] items-center py-16 px-4 md:py-20 text-white">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">LATEST BLOGS</h2>
        <BlogsList />
      </section>
    </main>
  );
}

export default Page;